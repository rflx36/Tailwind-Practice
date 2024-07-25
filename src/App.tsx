import { useState } from "react"



interface comment {
  commenter: string,
  value: string
}

function App() {

  const [comments, setComments] = useState<Array<comment | null>>([]);
  const [value, setValue] = useState(0);

  const ChangeComment = (val: comment) => {
    if (val.value == '') {
      return;
    }
    const com = [...comments];
    com.push(val);
    setComments(com);

  }
  return (
    <>
      <div className="dark:bg-neutral-900 size-full absolute">
        <div className="relative dark:bg-neutral-800 dark:border-neutral-700 dark:rounded-2xl transition delay-100 md:w-80 sm:w-40 w-max bg-neutral-100 h-48 rounded-lg border-neutral-300 flex items-center justify-center border mt-5 mx-auto flex-col">
          <button
            className=" w-28 h-8 bg-pink-400/80 rounded-md m-2 text-white transition delay-200 hover:bg-pink-400 cursor-pointer"
            onClick={() => setValue(value + 1)}
          >
            <p className=" dark:font-serif font-sans transition delay-300">Update</p>
          </button>
          <div className="dark:bg-neutral-700/50 p-3 h-8 transition delay-200 rounded-lg flex justify-center items-center bg-neutral-200 ">
            <p className="dark:text-white  transition delay-300">Text Value: {value}</p>
          </div>
          <div className="h-5 w-10 bg-red-200 hover:after:content-[''] hover:after:absolute hover:after:w-10 hover:after:h-5 hover:after:bg-red-500
          hover:after:top-1/2 hover:after:left-1/2 hover:after:translate-x-[-50%] hover:after:translate-y-[-50%] z-10
          p-3
          ">
            Hover this
          </div>
          <div className="absolute left-0 top-0 m-2 flex gap-1">
            <div className="size-[10px] rounded-full bg-pink-400 "></div>
            <div className="size-[10px] rounded-full bg-yellow-400"></div>
            <div className="size-[10px] rounded-full bg-green-400"></div>
          </div>
        </div>
        <Commenter commenter="namerrsz" Changes={ChangeComment} />
        {comments.map((e, i) => <Comments key={i} value={e!.value} commenter={e!.commenter}  />)}
      </div>
    </>
  )
}


function Comments(props: { value: string, commenter: string }) {

  return (
    <div className={"animate-slide-1 mt-5 md:w-80 w-20 h-max rounded-2xl mx-auto bg-neutral-100  dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"}>
      <p className="dark:text-white/50  text-sm ml-2" >{props.commenter}</p>
      <div className="flex items-center">
        <img
          src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-1/449708675_7867885393261257_6067207028391218532_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=YJ1Jti28Y7MQ7kNvgGkfntX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl30-2.fna&oh=00_AYDMNQNaUZk-ggVwWZMA7E_mI51WupxnlLti0f7iwoqMfg&oe=66A6D316"
          className="bg-white size-10 rounded-full m-2"></img>
        <p className="dark:text-white">{props.value}</p>
      </div>
    </div>
  )
}


function Commenter(props: { commenter: string, Changes: (x: comment) => void }) {
  const [text, setText] = useState('Comment here');
  return (
    <div className=" mt-5 md:w-80 w-20 h-max rounded-2xl mx-auto bg-neutral-100  dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">

      <div className="flex items-center">
        <img
          src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-1/449708675_7867885393261257_6067207028391218532_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=YJ1Jti28Y7MQ7kNvgGkfntX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl30-2.fna&oh=00_AYDMNQNaUZk-ggVwWZMA7E_mI51WupxnlLti0f7iwoqMfg&oe=66A6D316"
          className="bg-white size-10 rounded-full m-2"></img>
        <textarea value={text} onChange={(e) => setText(e.currentTarget.value)} className="bg-neutral-200 dark:text-white  pl-3 py-2 outline-none resize-none dark:bg-neutral-700/50 rounded-full m-2 h-10 w-full"></textarea>

      </div>
      <button
        onClick={() => { props.Changes({ commenter: props.commenter, value: text }); setText('') }}
        className="w-[calc(100%-1rem)] text-center  rounded-lg h-auto m-2 bg-pink-400 hover:bg-pink-400/80">
        <p>Send</p>
      </button>
    </div>
  )
}



export default App

































/*
typography
backgrounds
sizing  
spacing
borders
flexbox and grid
effects
filters
tables
Transitions and animation
transforms
layout
customization
interactivity


      <p className="-tracking-[-2px] ordinal font-bold stacked-fractions line-clamp-1">3/4 2nd 1st</p>
      <p className="font-bold text-[30px] hover:animate-pulse duration-500 ease-in-out transition-td hover:text-neutral-300  underline decoration-pink-400 hover:decoration-blue-400 ">The quick brown fox...</p>
     <div className="hover:animate-spin rotate-0 duration-300 ease-in transition-all size-10 m-5 rounded-md  bg-pink-500"></div>
      <p className="font-HHRFont antialiased">The quick brown fox...</p>
      <div className="bg-yellow-400 lg:bg-yellow-200  xl:bg-yellow-100  2xl:bg-yellow-50 w-[100px] h rounded-md md:pb-[20px] m-10 transition-all ease-in-out duration-300"></div>
      <p className="font-HHRFont "> The quick brown fox..</p>
      <div className="size-20 bg-red-400"></div>
      <p className="hover:font-sans mx-auto w-max transition-all delay-[1s] md:text-red-500 ease-in duration-500"> The quick brown fox..</p>
      <p className="md:hover:text-red-500 hover:text-yellow-400 text-red-500"> Color only changes when hovered and mobile</p>
      <p className="md:font-serif"> The quick brown fox..</p>
      <p className="text-yellow-400 md:text-black  transition-all ease-in duration-200 ">yellow if mobile black if not</p>
      <p className="hover:font-mono"> The quick brown fox..</p>
      <p className="hover:font-['RandomAhhFont'] text-red-500 bg-neutral-600 transition-all ease-in duration-300 hover:text-red-300"> The quick brown fox..  </p>
   
*/