// Javascript program of game of stones

// // Function that returns true if u win
// function checkWin(n) {
//     if (n % 4 != 0) {
//         return true;
//     } else {
//         return false;
//     }


// }

// // n is number of stones
// let n = 4;

// if (checkWin(n))
//     document.write("YES");
// else
//     document.write("NO");



// function check(n){
//    if(n == n--){ 

//    }


// }
let r = Number(prompt('enter a number Of Stones '))

// alert(typeof(r))
$('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)

function player1Reduce1() {

    if (r >= 1) {
        r--

    } else {
        alert('PLayer 1 win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)


}

function player1Reduce2() {


    if (r >= 1) {
        if (r <= 1) {
            alert('not valid')
        } else {
            r = r - 2

        }
    } else if (r == 0) {
        alert('NOt Valid')
    } else {
        alert('Player 2 Is Win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)

}


function player2Reduce1() {

    if (r >= 1) {
        r--

    } else {
        alert('PLayer 2 win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)


}



function player2Reduce2() {


    if (r >= 1) {
        if (r <= 1) {
            alert('not valid')
        } else {
            r = r - 2

        }


    } else if (r == 0) {
        alert('NOt Valid')
    } else {
        alert('Player 2 Is Win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)

}

function playAgin() {
    if (r == 0) {
        location.reload()
    }

}