// load all surah name here 
const loadQuran = async()=>{
    document.getElementById('spinner').classList.remove('d-none');
    const res = await fetch('https://api.quran.com/api/v4/chapters?language=bn');
    const quran = await res.json();
    viewQuran(quran.chapters);
}

// set all surah on button 
const viewQuran =(surahs)=>{
    const surahsNameContainer = document.getElementById('surahs-name');
    surahs.forEach(surah => {
        const surahList = document.createElement('div');
        surahList.classList.add('col-6','col-md-3');
        surahList.innerHTML = `<button onclick = "getSurah('${surah.id}')" class = "btn btn-outline-success w-100 my-3 text-start" data-bs-toggle="modal" data-bs-target="#staticBackdrop">${surah.id} : ${surah.name_arabic} ${surah.name_simple}</button>`
        surahsNameContainer.appendChild(surahList);
        document.getElementById('spinner').classList.add('d-none');
        // showFullSurah(surah);
    });
}

// get each surah by button id 
const getSurah =async(surahNumber)=>{
    const res = await fetch(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surahNumber}`);
    const surah = await res.json();
    showFullSurah(surah.verses);
}

// show full surah on modal 
const showFullSurah = (surah)=>{
    let ayatNum = 0;
    const ayahsContainer = document.getElementById('ayahs-container');
    ayahsContainer.textContent = "";
    surah.forEach(ayahs=>{
        const createAyasList = document.createElement('li');
        createAyasList.classList.add('text-end','row')
        createAyasList.innerHTML = `<span class ="col-1 fs-3 d-block">${++ayatNum}</span> <span class ="col-11 fs-3 arabic-font d-block">${ayahs.text_uthmani} &circledcirc;</span>`
        ayahsContainer.appendChild(createAyasList);        
    })
}
loadQuran()