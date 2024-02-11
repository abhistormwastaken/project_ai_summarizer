import React from 'react'
import { logo } from '../assets'

function Hero() {
  return (
    <header className='flex w-full flex-col items-center justify-center'>
        <nav className='flex justify-between items-center w-full pt-3 mb-10'>
            <img src={logo} alt="website_logo" className='w-28 object-contain'/>
            <button type='button'
                onClick={()=>{window.open("https://github.com/abhistormwastaken/ai-article-summarizer")}}
                className='black_btn'
            >Github</button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='blue_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simplify your reading with Summize, an open-source article summarizer
            that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero