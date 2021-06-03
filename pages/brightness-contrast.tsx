import { useState } from 'react'
import Layout from '../components/Layout'

const defaultBrightness = 150;

const BrightnessContrastPage = () => {
  const [brightness, setBrightness] = useState(defaultBrightness);
  const [showResult, setShowResult] = useState(false);

  const decrementWidth = () => {
    setBrightness(brightness-1);
  }

  const incrementWidth = () => {
    setBrightness(brightness+1);
  }

  const resetWidth = () => {
    setBrightness(defaultBrightness);
  }

  const toggleShowResult = () => {
    setShowResult(!showResult);
  }

  return(
    <Layout title="明度対比錯視">
      <h1>明度対比錯視</h1>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 300}}>
        <div style={{display: 'flex'}}>
            <div style={{position: 'relative'}}>
                <div style={{position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#5f5f5f', width: 300, height: 300}} />
                <div style={{position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#'+brightness.toString(16)+brightness.toString(16)+brightness.toString(16), width: 80, height: 80}} />
            </div>
            <div style={{position: 'relative', marginLeft: 300}}>
                <div style={{position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#eaeaea', width: 300, height: 300}} />
                <div style={{position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#969696', width: 80, height: 80}} />
            </div>
        </div>
        <div style={{display: 'flex', marginTop: 200}}>
          <button onClick={incrementWidth}>
            明度を上げる
          </button>
          <button onClick={decrementWidth}>
            明度を下げる
          </button>
          <button onClick={resetWidth}>
            明度をリセットする
          </button>
          <button onClick={toggleShowResult}>
            {showResult ? '結果を非表示にする' : '結果を表示する'}
          </button>
        </div>
      </div>
      {showResult && 
        <div>
          <p>現在の明度：{brightness}</p>
          <p>当初の明度：{defaultBrightness}</p>
        </div>
      }
      <p style={{marginTop: 50}}>
          明度の参考：http://s-park.wao.ne.jp/archives/1259
      </p>
    </Layout>
  )
}

export default BrightnessContrastPage
