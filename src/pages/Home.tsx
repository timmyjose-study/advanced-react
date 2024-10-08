import { useNavigate } from "react-router-dom"
import { globalStyles } from "../globalStyles"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div style={globalStyles.container}>
        <button 
          style={globalStyles.button} 
          onClick={() => navigate('/usestate-demo')}>
          useState Demo
        </button>
        <button
          style={globalStyles.button}
          onClick={() => navigate('/usereducer-demo')}>
            useReducer Demo
        </button>
        <button
          style={globalStyles.button}
          onClick={() => navigate('/useref-demo')}>
            useRef Demo
        </button>
        <button
          style={globalStyles.button}
          onClick={() => navigate('/useeffect-demo')}>
            useEffect Demo
        </button>
        <button
          style={globalStyles.button}
          onClick={() => navigate('/usememo-demo')}>
            useMemo Demo
        </button>
        <button
          style={globalStyles.button}
          onClick={() => navigate('/usecallback-demo')}>
            useCallback Demo
        </button>
        <button
          style={globalStyles.button}
          onClick={() => navigate('/usecontext-demo')}>
            useContext Demo
        </button>
        <button 
          style={globalStyles.button} 
          onClick={() => navigate('custom-hook-demo')}>
          Custom Hook Demo
        </button>
      </div>
    </div>
  )
}

export default Home