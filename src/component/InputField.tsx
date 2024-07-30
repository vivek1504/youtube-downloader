import { useRecoilState, useSetRecoilState } from "recoil"
import { loadingAtom, thumbnailAtom, titleAtom, urlAtom } from "../atoms/atoms";
import axios from "axios";
import { useEffect } from "react";

export const InputField = ({setPasteLink}:{setPasteLink : any})=>{
    const [url, setUrl] = useRecoilState(urlAtom);
    const setTitle = useSetRecoilState(titleAtom);
    const setThumbnail = useSetRecoilState(thumbnailAtom);
    const setLoading = useSetRecoilState(loadingAtom);

    const handleDownload = ()=>{
        setLoading(false);
        setPasteLink(true);
        event?.preventDefault();
        axios.get(`http://localhost:4000/video-info?url=${url}`).then((response)=>{
            setThumbnail(response.data.thumbnail);
            setTitle(response.data.title);
            setLoading(true);
        })
    }

    useEffect(()=>{
        handleDownload();
    },[])
    return <div>
    <form className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="size-5">
            <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
            <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
        </svg>
        </div>
        <input onChange={(e)=>{
            setUrl(e.target.value);
        }} type="search" id="default-search" className="block w-full p-4 ps-10 font-semibold text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste URL" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#0000CD] hover:bg-[#0000CD] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" onClick={handleDownload}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" />
</svg>
        
        </button>
    </div>
</form>

    </div>
}