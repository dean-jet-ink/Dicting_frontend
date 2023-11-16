import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

import { SEARCH_ENGINE_ID } from "@/config/constants";
import Search from "@/components/search/Search";
import Modal from "@/components/modal/Modal";
import Button from "@/components/button/Button";

type Props = {
  search: string;
  setImg: (img: string) => void;
};

const ImageSearch = ({ search, setImg }: Props) => {
  const [searchedWord, setSearchedWord] = useState(search);
  const [selectedImage, setSelectedImage] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isOpenMask, setOpenMask] = useState(false);

  useEffect(() => {
    const gcse = document.createElement("script");
    gcse.async = true;
    gcse.src = `https://cse.google.com/cse.js?cx=${SEARCH_ENGINE_ID}`;
    const s = document.getElementsByTagName("script")[0];
    s.parentNode?.insertBefore(gcse, s);

    const renderSearchForms = function () {
      if (document.readyState === "complete") {
        window.google.search.cse.element.render({
          div: "googlesearch",
          tag: "search",
          gname: "gsearch",
        });
      } else {
        window.google.setOnLoadCallback(function () {
          window.google.search.cse.element.render({
            div: "googlesearch",
            tag: "search",
            gname: "gsearch",
          });
        }, true);
      }
    };

    window.__gcse = {
      parsetags: "explicit",
      callback: renderSearchForms,
    };

    return () => {
      s.parentNode?.removeChild(gcse);
    };
  }, []);

  const openImgMask = () => {
    setOpenMask(true);
  };

  const closeImgMask = () => {
    const closeButton: HTMLButtonElement = document.querySelector(
      ".gsc-results-close-btn"
    )!;
    closeButton.click();

    setOpenMask(false);
  };

  const openConfirmImage = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const closeConfirm = () => {
    setOpen(false);
  };

  const appendImage = () => {
    setImg(selectedImage);

    // 画損検索モーダルのクローズボタン
    const closeButton: HTMLButtonElement = document.querySelector(
      ".gsc-results-close-btn"
    )!;
    closeButton.click();

    closeConfirm();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedWord(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const value = searchedWord.trim();

    if (value === "") return;

    const gsearch = window.google.search.cse.element.getElement("gsearch");

    openImgMask();
    gsearch.execute(value);
    setCustomEvents();
  };

  const setCustomEvents = () => {
    //画像検索モーダルのz-index調整
    const modal: HTMLDivElement = document.querySelector(
      ".gsc-results-wrapper-overlay"
    )!;
    modal.style["zIndex"] = "50";

    // 画像検索モーダルでのタブメニュー取得
    const tabs: NodeListOf<HTMLButtonElement> =
      modal.querySelectorAll(".gsc-tabHeader");

    // タブメニューの2番目を選択
    tabs[1].click();

    // 表示された画像一覧での各画像に、画像選択、確認モーダルオープンのイベント追加
    setSelectedImgEvent();

    // ページネーションボタンのクリックイベントに上記の画像保存イベントを仕込む
    setPagenationEvent();
  };

  const setSelectedImgEvent = () => {
    // 標準のポップアップ表示要素の無効化
    const popups: NodeListOf<HTMLDivElement> = document.querySelectorAll(
      ".gs-result.gs-imageResult.gs-imageResult-popup"
    );

    // 一番外側の要素にポインターとイベントを付与
    const popupContainers: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(
        ".gsc-imageResult.gsc-imageResult-popup.gsc-result"
      );

    if (popups.length === 0 || popupContainers.length === 0) {
      setTimeout(setSelectedImgEvent, 500);
      return;
    }

    popups.forEach((popup) => {
      popup.style["pointerEvents"] = "none";
    });

    popupContainers.forEach((container) => {
      container.style["cursor"] = "pointer";

      container.onclick = () => {
        const img = container.getElementsByTagName("img")[0];
        const src = img.getAttribute("src")!;
        openConfirmImage(src);
      };
    });
  };

  const setPagenationEvent = () => {
    const pagenations = document.querySelectorAll(".gsc-cursor-page");

    if (pagenations.length === 0) {
      setTimeout(setPagenationEvent, 500);
      return;
    }

    pagenations.forEach((pagenation) => {
      pagenation.addEventListener("click", () => {
        setTimeout(setSelectedImgEvent, 1000);
      });
    });
  };

  return (
    <div>
      <h3 className="text-sm mb-2">画像検索</h3>
      <Search
        id="search"
        onKeyDown={onKeyDown}
        value={searchedWord}
        onChange={onChange}
      />
      <div id="googlesearch"></div>

      {/* 画像検索モーダルマスク */}
      {/* 画像検索モーダルにはマスクがないため、クローズボタンが押されずに閉じられた場合は検索値が初期化しない */}
      {/* そのため、疑似的なマスクを作成する */}
      <Modal
        isOpen={isOpenMask}
        close={closeImgMask}
        bg="bg-transparent"
        isMask={false}
      >
        <></>
      </Modal>

      {/* 画像保存確認モーダル */}
      <Modal isOpen={isOpen} close={closeConfirm} zIndex="z-[70]">
        <div className="w-full px-12 py-7">
          <img
            src={selectedImage}
            alt=""
            className="object-fill mb-5 border-2 border-gray-200 rounded-sm m-auto"
          />
          <div className="w-fit m-auto">
            <Button onClick={appendImage}>画像追加</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageSearch;
