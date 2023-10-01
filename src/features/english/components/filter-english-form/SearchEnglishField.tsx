import React from "react";

import Search from "../../../../components/search/Search";
import useSearch from "../../../../store/search/search";
import { useForm } from "react-hook-form";
import { SearchedWord } from "../../types";

const SearchEnglishField = () => {
  const { setSearchedWord } = useSearch();
  const { register, handleSubmit, formState } = useForm<SearchedWord>();

  const onSubmit = (data: SearchedWord) => {
    setSearchedWord(data.searchedWord);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Search placeholder="Search..." {...register("searchedWord")} />
    </form>
  );
};

export default SearchEnglishField;
