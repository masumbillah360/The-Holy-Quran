// load all surah name here 
const loadQuran = async()=>{
    document.getElementById('spinner').classList.remove('d-none');
    const res = await fetch('https://api.alquran.cloud/v1/quran');
    const quran = await res.json();
    viewQuran(quran.data.surahs);
}

// set all surah on button 
const viewQuran =(surahs)=>{
    const surahsNameContainer = document.getElementById('surahs-name');
    surahs.forEach(surah => {
        // console.log(surah);
        const surahList = document.createElement('div');
        surahList.classList.add('col-6','col-md-3');
        surahList.innerHTML = `<button onclick = "getSurah('${surah.number}')" class = "btn btn-outline-success w-100 my-3 text-start" data-bs-toggle="modal" data-bs-target="#staticBackdrop">${surah.number} :- ${surah.englishName} ${surah.name}</button>`
        surahsNameContainer.appendChild(surahList);
        document.getElementById('spinner').classList.add('d-none');
    });
}

// get each surah by button id 
const getSurah =async(surahNumber)=>{
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
    const surah = await res.json();
    showFullSurah(surah.data);
    console.log(surah.data);
}

// show full surah on modal 
const showFullSurah = (surah)=>{
    let ayatNum = 0;
    document.getElementById('surah-name-modal').innerText = `${surah.name} ${surah.englishName}`;
    const ayahsContainer = document.getElementById('ayahs-container');
    ayahsContainer.textContent = "";
    surah.ayahs.forEach(ayahs=>{
        console.log(ayahs.text +" : "+ ayahs.number);
        const createAyasList = document.createElement('li');
        createAyasList.classList.add('text-end','row')
        createAyasList.innerHTML = `<span class ="col-1 fs-3 d-block">${++ayatNum}</span> <span class ="col-11 fs-3 arabic-font d-block">${ayahs.text} &circledcirc;</span>`
        ayahsContainer.appendChild(createAyasList);        
    })
}
loadQuran()