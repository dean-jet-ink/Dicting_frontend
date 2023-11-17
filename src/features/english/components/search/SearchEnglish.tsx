import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import Search from "../../../../components/search/Search";
import useSearch from "../../../../store/search/search";
import { useForm } from "react-hook-form";
import { SearchedWord } from "../../types";
import { useGetEnglishItems } from "../../api/get-english-items";
import useFilteredEnglishItemsStore from "@/store/filtered-english-items/filteredEnglishItems";
import Loading from "@/components/loading/Loading";
import AutoComplete from "./AutoComplete";
import { useProficiency } from "@/store/proficiency/proficiency";
import { SearchIcon, X } from "lucide-react";

type SearchEnglishProps = {
  isOpenMobile: boolean;
  open: () => void;
  close: () => void;
};

const SearchEnglish = ({ isOpenMobile, open, close }: SearchEnglishProps) => {
  const { data: englishItems, isLoading } = useGetEnglishItems({});

  // 検索WordによってフィルタリングされたEnglishItemsをStoreで管理
  // CardListコンポーネントでそれを表示
  const { setFilteredEnglishItems } = useFilteredEnglishItemsStore();

  const { proficiency } = useProficiency();

  const { searchedWord, setSearchedWord } = useSearch();

  const onSubmit = (data: SearchedWord) => {
    const word = data.searchedWord;

    setSearchedWord(word);
    setFilteredEnglishItems({ word, proficiency });
    setSelectedRow(-1);
    setOpen(false);
    setHover(false);
    searchRef.current?.blur();
  };

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!isLoading) {
      setFilteredEnglishItems({
        word: searchedWord,
        proficiency,
      });
    }
  }, [englishItems]);

  const { register, handleSubmit, formState, setValue } =
    useForm<SearchedWord>();

  // オートコンプリート選択後、searchをblurしたい
  // searchのカスタムRefをreact-hook-formと共有するため、useImperativeHandleを使用
  const searchRef = useRef<HTMLInputElement>(null);
  const { ref } = register("searchedWord");
  useImperativeHandle(ref, () => searchRef.current);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;

    setValue("searchedWord", word);

    if (englishItems && word !== "") {
      const autoComplete = englishItems.english_items
        .filter((englishItem) =>
          englishItem.content.toLowerCase().startsWith(word.toLowerCase())
        )
        .map((englishItem) => englishItem.content);

      // オートコンプリートの行数を10までに絞る
      const limitedAutoComplete: string[] = [];
      for (let i = 0; i < 10; i++) {
        if (i >= autoComplete.length) break;

        limitedAutoComplete.push(autoComplete[i]);
      }

      setComplete(limitedAutoComplete);
    } else if (word === "") {
      setComplete([]);
    }
  };

  const [isOpen, setOpen] = useState(false);

  const onFocus = () => {
    setOpen(true);
  };

  const onBlur = () => {
    setOpen(false);
  };

  const baseCompleteStyle = "absolute w-full shadow-lg bg-white";
  const openCompleteStyle = `${baseCompleteStyle} block`;
  const closeCompleteStyle = `${baseCompleteStyle} hidden`;

  const [autoComplete, setComplete] = useState<string[]>([]);

  // オートコンプリートの選択行
  const [selectedRow, setSelectedRow] = useState(-1);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const length = autoComplete.length;
    let newSelectedRow: number;

    // ラウンドロビン
    if (e.code === "ArrowDown") {
      newSelectedRow = (selectedRow + 1) % length;

      setSelectedRow(newSelectedRow);
      setValue("searchedWord", autoComplete[newSelectedRow]);
    } else if (e.code === "ArrowUp") {
      newSelectedRow = (selectedRow - 1 + length) % length;
      if (selectedRow === -1) ++newSelectedRow;

      setSelectedRow(newSelectedRow);
      setValue("searchedWord", autoComplete[newSelectedRow]);
    }
  };

  // オートコンプリートの行をクリックした際の処理
  const onClickItem = (word: string) => {
    setValue("searchedWord", word);
    setSearchedWord(word);
    setFilteredEnglishItems({ word, proficiency });
    setSelectedRow(-1);
    setOpen(false);
    setHover(false);
  };

  // SearchがBlurとなった後も、hover中はオートコンプリートを表示し、アイテムのクリックを有効にするために定義
  const [isHover, setHover] = useState(false);

  const onHoverOpen = () => {
    setHover(true);
  };

  const onMouseLeaveClose = () => {
    setHover(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="relative">
          <SearchIcon
            className={`${isOpenMobile ? "hidden" : "block"} md:hidden ${
              searchedWord === "" ? "text-gray-500" : "text-accent"
            }`}
            onClick={open}
          />
          <div
            className={`${
              isOpenMobile
                ? "w-[88%] pointer-events-auto top-[-20px] flex items-center justify-between"
                : "w-0 hidden pointer-events-none"
            } md:w-full md:block pointer-events-none md:pointer-events-auto absolute md:static`}
          >
            <div className="flex-[90%]">
              <Search
                id="searchEnglish"
                placeholder="Search..."
                {...register("searchedWord")}
                ref={searchRef}
                autoComplete="off"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                defaultValue={searchedWord}
              />
            </div>
            <X className="text-gray-500 flex-[10%] md:hidden" onClick={close} />
          </div>
          <div
            className={
              isOpen || isHover ? openCompleteStyle : closeCompleteStyle
            }
            onMouseEnter={onHoverOpen}
            onMouseLeave={onMouseLeaveClose}
          >
            <AutoComplete
              autoComplete={autoComplete}
              selectedRow={selectedRow}
              onClickItem={onClickItem}
            />
          </div>
        </div>
      )}
    </form>
  );
};

export default SearchEnglish;
