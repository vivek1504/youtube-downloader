import { useRecoilValue } from "recoil";
import { loadingAtom, thumbnailAtom, titleAtom } from "../atoms/atoms";

export const VideoCard = () => {
    const thumbnail = useRecoilValue(thumbnailAtom);
    const title = useRecoilValue(titleAtom);
    const loading = useRecoilValue(loadingAtom);
    return <div className="mx-auto mt-10 mb-6 grid max-w-screen-xl gap-y-8 lg:grid-cols-3">
    <div></div>
    <div className="group cursor mx-4 overflow-hidden rounded-2xl bg-slate-600 shadow-xl duration-200 hover:-translate-y-4">
        {loading ? <div>
      <div className="flex h-60 flex-col justify-between overflow-hidden">
        <img src={thumbnail} className="group-hover:scale-110 h-full w-full object-cover duration-200" />
      </div>
      <div className="flex-1 overflow-hidden bg-slate-600 px-3 py-4">
        <h5 className="mb-2 text-xl font-bold text-white">{title}</h5>
        <p className="text-gray-600"></p>
      </div>
      </div> : <div className="flex justify-center items-center h-80">
       <LoadingComp></LoadingComp>
       </div>}
    </div> 
    <div></div>
  </div>
  
}

function LoadingComp(){
    return <div className='flex space-x-2 justify-center items-center dark:invert'>
    <span className='sr-only'>Loading...</span>
     <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
   <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
   <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
</div>
}