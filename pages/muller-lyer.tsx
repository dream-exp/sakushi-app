import { useState } from 'react'
import Layout from '../components/Layout'

const defaultWidth = 300;

const MullerLyerPage = () => {
  const [lineWidth, setLineWidth] = useState(defaultWidth);
  const [showResult, setShowResult] = useState(false);

  const decrementWidth = () => {
    setLineWidth(lineWidth-1);
  }

  const incrementWidth = () => {
    setLineWidth(lineWidth+1);
  }

  const resetWidth = () => {
    setLineWidth(defaultWidth);
  }

  const toggleShowResult = () => {
    setShowResult(!showResult);
  }

  return(
    <Layout title="ミュラー・リヤー錯視">
      <h1>ミュラー・リヤー錯視</h1>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 100}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src="/images/muller_lyer_sample.png" />
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src="/images/right_angle.png" />
          <div style={{background: 'black', width: lineWidth, height: 6}} />
          <img src="/images/left_angle.png" />
        </div>
        <div style={{display: 'flex', marginTop: 50}}>
          <button onClick={incrementWidth}>
            1px長くする
          </button>
          <button onClick={decrementWidth}>
            1px短くする
          </button>
          <button onClick={resetWidth}>
            長さをリセットする
          </button>
          <button onClick={toggleShowResult}>
            {showResult ? '結果を非表示にする' : '結果を表示する'}
          </button>
        </div>
      </div>
      {showResult && 
        <div>
          <p>下の線の長さ：{lineWidth}</p>
          <p>当初の線の長さ：{defaultWidth}</p>
        </div>
      }
    </Layout>
  )
}

export default MullerLyerPage
