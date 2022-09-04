console.log("connected");
// const loadQuran = async()=>{
//     document.getElementById('spinner').classList.remove('d-none');
//     const res = await fetch('http://api.alquran.cloud/v1/quran');
//     const quran = await res.json();
//     viewQuran(quran.data.surahs);
// }
fetch('http://api.alquran.cloud/v1/quran')
.then((res)=>res.json())
.then((data)=>console.log(data));


// const viewQuran =(surahs)=>{
//     const surahsNameContainer = document.getElementById('surahs-name');
//     surahs.forEach(surah => {
//         // console.log(surah);
//         const surahList = document.createElement('div');
//         surahList.classList.add('col-md-3');
//         surahList.innerHTML = `
//            <button onclick = "getSurah('${surah.number}')" class = "btn btn-outline-success w-100 my-3 text-start" data-bs-toggle="modal" data-bs-target="#staticBackdrop">${surah.number} :- ${surah.englishName} ${surah.name}</button>
//         `
//         surahsNameContainer.appendChild(surahList);
//         document.getElementById('spinner').classList.add('d-none');
//     });
// }

// const getSurah =async(surahNumber)=>{
//     const res = await fetch(`http://api.alquran.cloud/v1/surah/${surahNumber}`);
//     const surah = await res.json();
//     showFullSurah(surah.data.ayahs);
// }

// const showFullSurah = (surah)=>{
//     let ayatNum = 0;
//     document.getElementById('surah-name-modal').innerText = surah.name;
//     const ayahsContainer = document.getElementById('ayahs-container');
//     ayahsContainer.textContent = "";
//     surah.forEach(ayahs=>{
//         console.log(ayahs.text +" : "+ ayahs.number);
//         const createAyasList = document.createElement('li');
//         createAyasList.classList.add('text-end','row')
//         createAyasList.innerHTML = `
//             <span class = "col-11">${ayahs.text}</span> <span class = "col-1">${ayatNum++}</span>
//         `
//         ayahsContainer.appendChild(createAyasList);
        
//     })
// }

// loadQuran()
// // const quran = await loadQuran();
// // console.log(quran);