


export const fetchData = async (period) => {
    const url = `http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/${period}.json?api-key=FNjAyWjEtKWSs2y5tYKwYyc0K6LDb0kV`
    const data = await fetch(url)
    return data.json()
}