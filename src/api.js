export const getSearchId = () => {
  return fetch('https://front-test.beta.aviasales.ru/search')
    .then((response) => response.json())
    .then((data) => data.searchId)
}

export const getSearchPortion = (searchId) => {
  return fetch(
    `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
  ).then((response) => {
    if (!response.ok) {
      return new Error(response.text())
    } else {
      return response.json()
    }
  })
}
