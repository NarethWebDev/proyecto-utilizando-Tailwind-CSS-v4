const historias =document.querySelector('#drop')
const historiasContenedor =document.querySelector('#histo')
const productos =document.querySelector('#drop2')

productos.addEventListener('click', () => {
    const texto =`<div class="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">

        <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-red-600 inline-block pb-1 border-b-4 border-b-red-600 leading-tight tracking-wide">
                CATEGORIAS
            </h2>
        </div>

        <div class="flex flex-col lg:flex-row items-start justify-between">
            
            <div class="w-full lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6">
                
                <div class="flex flex-col items-center text-center space-y-3 p-2">
                    <div class="text-blue-700 w-20 h-20 sm:w-24 sm:h-24">
                        <img src="../assets/img/un-pan.png" alt="Icono de pan" class="w-full h-full object-contain">
                    </div>
                    <p class="text-lg font-semibold text-blue-700 uppercase">PANES</p>
                </div>

                <div class="flex flex-col items-center text-center space-y-3 p-2">
                    <div class="text-blue-700 w-20 h-20 sm:w-24 sm:h-24">
                        <img src="../assets/img/rosquilla.png" alt="Icono de pan" class="w-full h-full object-contain">
                    </div>
                    <p class="text-lg font-semibold text-blue-700 uppercase">PAN DULCE</p>
                </div>
                
                <div class="flex flex-col items-center text-center space-y-3 p-2">
                    <div class="text-blue-700 w-20 h-20 sm:w-24 sm:h-24">
                       <img src="../assets/img/taza.png" alt="Icono de pan" class="w-full h-full object-contain">
                    </div>
                    <p class="text-lg font-semibold text-blue-700 uppercase">PASTELES</p>
                </div>

                <div class="flex flex-col items-center text-center space-y-3 p-2">
                    <div class="text-blue-700 w-20 h-20 sm:w-24 sm:h-24">
                        <img src="../assets/img/pan-tostado.png" alt="Icono de pan" class="w-full h-full object-contain">
                    </div>
                    <p class="text-lg font-semibold text-blue-700 uppercase">TOSTADAS Y TOSTAOS</p>
                </div>

                <div class="flex flex-col items-center text-center space-y-3 p-2">
                    <div class="text-blue-700 w-20 h-20 sm:w-24 sm:h-24">
                        <img src="../assets/img/tortillas.png" alt="Icono de pan" class="w-full h-full object-contain">
                    </div>
                    <p class="text-lg font-semibold text-blue-700 uppercase">SOLUCIONES</p>
                </div>

                <div class="flex flex-col items-center text-center space-y-3 p-2">
                    <div class="text-blue-700 w-20 h-20 sm:w-24 sm:h-24">
                        <img src="../assets/img/snacks-de-maiz.png" alt="Icono de pan" class="w-full h-full object-contain">
                    </div>
                    <p class="text-lg font-semibold text-blue-700 uppercase">SNACKS</p>
                </div>

            </div>
            
            
            </div>
        </div>
    </div>
</div>`

    historiasContenedor.innerHTML = texto})

productos.addEventListener('dblclick', () => {
    historiasContenedor.innerHTML = '';
})
historias.addEventListener('click', () => {
    const text = `<div class="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-10">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-red-600 inline-block pb-1 border-b-4 border-b-red-600 leading-tight">
                RELATOS DE NUESTRA GENTE
            </h2>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-center md:space-x-12">
            
            <div class="mb-8 md:mb-0 w-full md:w-1/3 flex justify-center">
                <div class="w-48 h-64 sm:w-64 sm:h-80 flex items-center justify-center">
                    <img src="../assets/img/osito-bimbo1-removebg-preview.png" alt="Osito Bimbo" class="w-full h-auto" />
                </div>
            </div>

            <div class="w-full md:w-2/3 max-w-lg">
                <h3 class="text-2xl sm:text-3xl font-bold text-blue-700 leading-snug mb-4">
                    Conoce las anécdotas de los <span class="block">Colaboradores que</span> crecieron con Bimbo®
                </h3>

                <p class="text-gray-600 text-base sm:text-lg">
                    Descubre las emotivas historias que marcaron la vida y el trabajo de nuestro tesoro más preciado: El equipo humano de Bimbo®.
                </p>
            </div>
        </div>
    </div>
</div>`
    historiasContenedor.innerHTML = text
})
historias.addEventListener('dblclick', () => {
    historiasContenedor.innerHTML = '';
})

let index = 0
const carousel = document.getElementById("carousel")
const totalSlides = carousel.children.length
let intervalId = null

function showSlide() {
  carousel.style.transform = `translateX(-${index * 100}%)`
}

function nextSlide() {
  index = (index + 1) % totalSlides
  showSlide()
  resetInterval()
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides
  showSlide()
  resetInterval()
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    index = (index + 1) % totalSlides
    showSlide()
  }, 3000)
}

function resetInterval() {
  clearInterval(intervalId)
  startAutoSlide()
}

startAutoSlide()
function toggleButtonColor(button) {
  button.classList.toggle("bg-blue-800")
  button.classList.toggle("hover:bg-blue-900")

  button.classList.toggle("bg-red-600")
  button.classList.toggle("hover:bg-red-700")
}

