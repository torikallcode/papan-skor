import React, { useEffect, useState } from 'react';
import PlayerSection from '../components/Fragments/PlayerSection';
import { Button } from '../components/Elements/Button';
import { ModalBox } from '../components/Fragments/ModalBox';

const ScoreBoard = () => {
  const [skorPlayerSatu, setSkorPlayerSatu] = useState(0);
  const [skorPlayerDua, setSkorPlayerDua] = useState(0);
  const [babakPlayerSatu, setBabakPlayersatu] = useState(0);
  const [babakPlayerDua, setBabakPlayerDua] = useState(0);

  useEffect(() => {
    setSkorPlayerSatu(0);
    setSkorPlayerDua(0);
    setBabakPlayersatu(0);
    setBabakPlayerDua(0);
  }, []);

  return (
    <section className='min-w-full h-screen bg-slate-800 flex flex-col lg:flex-row justify-center items-center gap-2 relative'>
      <PlayerSection
        title="Player 1"
        score={skorPlayerSatu}
        onClickIncrement={() => setSkorPlayerSatu(skorPlayerSatu + 1)}
        onClickDecrement={() => setSkorPlayerSatu(skorPlayerSatu - 1)}
        backgroundColor="bg-blue-600"
      />
      <PlayerSection
        title="Player 2"
        score={skorPlayerDua}
        onClickIncrement={() => setSkorPlayerDua(skorPlayerDua + 1)}
        onClickDecrement={() => setSkorPlayerDua(skorPlayerDua - 1)}
        backgroundColor="bg-red-600"
        classname={`bottom-0 top-auto rounded-tr-md rounded-br-none lg:right-0 lg:left-auto lg:rounded-tl-md lg:rounded-tr-none`}
      />
      <div id='hai' className='h-36 sm:h-40 rounded-l-md bg-gray-800 p-2 sm:p-5 lg:p-5 flex flex-col gap-y-11 lg:gap-x-20 justify-center items-end absolute top-[50%] translate-y-[-50%] lg:translate-y-[-45%] bottom-0 right-0 lg:left-0 lg:top-0 lg:flex-row lg:max-w-[15rem] mx-auto lg:rounded-l-none lg:rounded-b-md'>
        <h1 onClick={() => setBabakPlayersatu(babakPlayerSatu + 1)} className='text-gray-100 text-3xl cursor-pointer w-10 text-center  rotate-90 sm:text-5xl font-utama lg:rotate-[-180]'>{babakPlayerSatu}</h1>
        <h1 onClick={() => setBabakPlayerDua(babakPlayerDua + 1)} className='text-gray-100 text-3xl cursor-pointer w-10 text-center rotate-90 sm:text-5xl font-utama lg:rotate-[-180]'>{babakPlayerDua}</h1>
      </div>
      <Button classname="absolute top-auto bottom-3 right-1 rotate-90">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
          <path d="M4 18L20 18" stroke="#f4f4f4" stroke-width="2" stroke-linecap="round" />
          <path d="M4 12L20 12" stroke="#f4f4f4" stroke-width="2" stroke-linecap="round" />
          <path d="M4 6L20 6" stroke="#f4f4f4" stroke-width="2" stroke-linecap="round" />
        </svg>
      </Button>
    </section>
  );
};

export default ScoreBoard;


// Penjelasan:
// Pertama, kita mengimpor useRef dari 'react'.
// Di dalam komponen React, kita membuat sebuah referensi menggunakan useRef() dan menetapkannya ke dalam variabel (dalam contoh ini, inputRef).
// Kita menggunakan prop ref pada elemen input dan memberikannya nilai referensi inputRef.
// Saat fungsi focusInput dipanggil, kita mengakses DOM input dengan menggunakan properti .current dari referensi inputRef.
// Kami menggunakan .focus() untuk mengatur fokus ke input tersebut.
// Keuntungan useRef:
// Memperoleh Akses ke Elemen DOM: useRef memungkinkan Anda untuk mendapatkan akses langsung ke elemen DOM dalam fungsi komponen fungsional.
// Mempertahankan Nilai antara Rerender: useRef mempertahankan nilai antara render, yang berarti nilai referensi akan selalu sama antara rerender.
// Kapan Menggunakan useRef:
// Memperoleh Akses ke Elemen DOM: Jika Anda perlu mengakses atau memanipulasi elemen DOM secara langsung dari dalam komponen React, useRef merupakan pilihan yang baik.
// Mempertahankan Nilai antara Rerender: Jika Anda perlu menyimpan nilai antara rerender, seperti nilai input dalam form atau data yang perlu disimpan untuk penggunaan berikutnya, useRef sangat berguna.