// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(directors) {
    let getAllDirectorsUniques = []

    directors.map(elm => {
        if (getAllDirectorsUniques.indexOf(elm['director']) == -1) {
            getAllDirectorsUniques.push(elm['director'])
        }
    })

    return getAllDirectorsUniques
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {

    const steven = arr.filter(elm => (elm['director'] === 'Steven Spielberg') && (elm['genre'].includes('Drama'))) //&& elm['genre'].includes('Drama')
    return steven.length


}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) {
        return 0
    }



    const allRates = arr.map(elm => {

        if (typeof elm['rate'] == 'number') {
            return elm['rate']
        } else {
            return 0
        }
    })

    const sumAllRates = allRates.reduce((acc, elm) => acc + elm)
    const resul = sumAllRates / arr.length

    return parseFloat(resul.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {

    const moviesDrama = arr.filter(elm => elm['genre'].includes('Drama'))

    if (moviesDrama.length === 0) {
        return 0
    }

    const allRates = moviesDrama.map(elm => elm['rate'])

    const sumAllRates = allRates.reduce((acc, elm) => acc + elm)



    const resul = sumAllRates / moviesDrama.length
    return parseFloat(resul.toFixed(2))


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(arr) {
    const arrCopy = [...arr]


    arrCopy.sort((a, b) => {

        if (a['year'] - b["year"] === 0) {

            const sortedByTitle = a['title'].localeCompare(b['title'])

            if (sortedByTitle > 0) {
                return 1

            } else if (sortedByTitle < 0) {
                return -1

            } else {
                return 0

            }

        } else {
            return (a['year'] - b["year"])
        }
    })
    return arrCopy
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const arrCopy = [...arr]

    const arrCopyTitle = arrCopy.map(elm => elm['title'])
    const arrCopyTitleOrder = arrCopyTitle.sort()


    if (arrCopyTitle.length > 20) {
        arrCopyTitle.splice(20)
    }




    return arrCopyTitleOrder
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {

    arrCopy = [...arr]

    return arrCopy
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
