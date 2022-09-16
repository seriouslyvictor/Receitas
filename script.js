'use strict'

const cardReceitas = document.querySelectorAll('.card--receitas');
const iconeReceitas = document.querySelectorAll('.icone--receitas');
const bovinos = document.querySelector('.fa-cow');
const peixe = document.querySelector('.fa-fish');
const frango = document.querySelector('.fa-cow');
const suino = document.querySelector('.fa-hippo');
const comp = document.querySelector('.fa-bowl-food');

for (let i = 0; i < iconeReceitas.length; i++) {
    iconeReceitas[i].addEventListener('click', function() {
        iconeReceitas[i].classList.toggle('selected')
    })
    
}