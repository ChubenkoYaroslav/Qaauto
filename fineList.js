"use strict";
window.fineList = {

  searchFines: searchFines,
};

let DB = data.finesData;

function searchFines(searchData) {
  let result = [];

  if (isNaN(searchData)) {
    result = DB.filter((fine) => fine.тип === searchData);
  } else {
    result = DB.filter((fine) => fine.номер === searchData);
  }

  return result;
}

   