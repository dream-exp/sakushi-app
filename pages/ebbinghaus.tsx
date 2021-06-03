import { useState } from 'react'
import Layout from '../components/Layout'

const defaultWidth = 41;

const EbbinghausPage = () => {
  const [circleWidth, setCircleWidth] = useState(defaultWidth);
  const [showResult, setShowResult] = useState(false);

  const decrementWidth = () => {
    setCircleWidth(circleWidth-1);
  }

  const incrementWidth = () => {
    setCircleWidth(circleWidth+1);
  }

  const resetWidth = () => {
    setCircleWidth(defaultWidth);
  }

  const toggleShowResult = () => {
    setShowResult(!showResult);
  }

  return(
    <Layout title="エビングハウス錯視">
      <h1>エビングハウス錯視</h1>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 50}}>
        <div style={{display: 'flex'}}>
            <div style={{position: 'relative'}}>
                <img src="/images/ebbinghaus_left.png" style={{position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
                <div style={{border: 'solid 2px #000', borderRadius: '50%', position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)', width: circleWidth, height: circleWidth, boxSizing: 'border-box'}} />
            </div>
            <img src="/images/ebbinghaus_right.png" style={{marginLeft: 180}}/>
        </div>
        <div style={{display: 'flex', marginTop: 50}}>
          <button onClick={incrementWidth}>
            1px大きくする
          </button>
          <button onClick={decrementWidth}>
            1px小さくする
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
          <p>左の円の幅：{circleWidth}</p>
          <p>当初の円の幅：{defaultWidth}</p>
        </div>
      }
      <p>
          錯視画像引用元：http://www.psy.ritsumei.ac.jp/~akitaoka/catalog.html
      </p>
    </Layout>
  )
}

export default EbbinghausPage
