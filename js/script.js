const mediaQuery = window.matchMedia('(max-width: 768px)');
const main = document.querySelector('#main');

// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
    main.innerHTML = `
    <div class='position-relative' id='main-sign'>
        <div class='signBox'>
            <h5 class='signText'>Giriş yap veya kayıt ol</h5>
            <form>
                <div class='input-group mb-3'>
                    <span class='input-group-text p-0 me-3 border-0 rounded-3'>
                        <select class='form-select ps-4 py-3' aria-label='telKod'>
                            <option selected>+90</option>
                            <option value='1'>+1</option>
                            <option value='2'>+49</option>
                        </select>
                    </span>
                    <input type='number' class='form-control rounded-2' placeholder='Telefon Numarası' id='main-input' required>
                </div>
                <button class='btn w-100' id='mainBtn'>Telefon numarası ile devam et</button>
            </form>
        </div>
    </div> `;
}