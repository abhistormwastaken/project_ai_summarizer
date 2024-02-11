import React, { useEffect, useState } from 'react'
import { copy, loader, linkIcon, tick } from '../assets'
import { useLazyGetSummaryQuery } from '../services/article'

function Demo() {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })

  const [allArticles, setAllArticles] = useState([])

  const [getSummary, { error, isLoading }] = useLazyGetSummaryQuery()

  useEffect(()=>{
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))

    if(articlesFromLocalStorage){
      setAllArticles(articlesFromLocalStorage)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({
      url: article.url
    })
    
    if(data?.summary){
      const newArticle = {...article, summary: data.summary}
      const updatedAllArticles = [newArticle, ...allArticles]

      setArticle(newArticle)
      setAllArticles(updatedAllArticles)

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles))
    }
  }

  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* Input */}
      <div className='flex flex-col w-full gap-2'>
        <form className='relative flex justify-center items-center'
          onSubmit={handleSubmit}>
          <img src={linkIcon} alt="link_icon" className='absolute left-0 my-2 ml-3 w-5'/>
          <input type="url" placeholder='Enter a URL' value={article.url} 
              onChange={(e) => setArticle(
                {...article, url: e.target.value}
              )} 
              required className='url_input peer'
          />
          <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
            <img src={tick} alt="tick" className='w-4'/>
          </button>
        </form>

        {/* Summarized URL History */}
      </div>

      {/* Results */}
    </section>
  )
}

export default Demo