const BASE_URL='https://rickandmortyapi.com/api';
const CHARACTER_URL=`${BASE_URL}/character`;

export const getUrl=(page='')=>
`${CHARACTER_URL}${page ? `?page=${page}`:''}`;