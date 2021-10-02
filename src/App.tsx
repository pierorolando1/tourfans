import React from 'react';

import LoadingOverlay from 'react-loading-overlay'

import PacmanLoader from 'react-spinners/PacmanLoader'
import BounceLoader from 'react-spinners/BounceLoader'
import BarLoader from 'react-spinners/BarLoader'
import BeatLoader from 'react-spinners/BeatLoader'
import CircleLoader from 'react-spinners/CircleLoader'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import ClipLoader from 'react-spinners/ClipLoader'
import ClockLoader from 'react-spinners/ClockLoader'
import FadeLoader from 'react-spinners/FadeLoader'
import RotateLoader from 'react-spinners/RotateLoader'
import PropagateLoader from 'react-spinners/PropagateLoader'
import DotLoader from 'react-spinners/DotLoader'
import GridLoader from 'react-spinners/GridLoader'
import HashLoader from 'react-spinners/HashLoader'
import PuffLoader from 'react-spinners/PuffLoader'
import PulseLoader from 'react-spinners/PulseLoader'
import RingLoader from 'react-spinners/RingLoader'
import RiseLoader from 'react-spinners/RiseLoader'
import ScaleLoader from 'react-spinners/ScaleLoader'
import SkewLoader from 'react-spinners/SkewLoader'
import SquareLoader from 'react-spinners/SquareLoader'

import { AppRouter } from './components/routes/AppRouter';
import { useSelector } from 'react-redux';

const today = new Date()
const hourNow = today.getHours()
const color = "#1D4ED8"
const spinners = [
  <PacmanLoader color={color}/>,     <BounceLoader color={color}/>,<BarLoader color={color}/>,  <BeatLoader color={color}/>, <CircleLoader color={color} />,
  <ClimbingBoxLoader color={color}/>,<ClipLoader color={color}/>,  <ClockLoader color={color}/>,<FadeLoader color={color}/>, <RotateLoader color={color} />,
  <PropagateLoader color={color}/>,  <DotLoader color={color}/>,   <GridLoader color={color}/>, <HashLoader color={color}/>, <PropagateLoader color={color}/>,
  <PuffLoader color={color}/>,      <PulseLoader color={color}/>,  <RingLoader color={color}/>, <RiseLoader color={color}/>, <ScaleLoader color={color}/>,
  <SkewLoader color={color}/>,      <SquareLoader color={color}/>, <SquareLoader color={color}/>, <PropagateLoader color={color}/>
]

function App() {
  const { modalOpen } = useSelector((state:any) => state.ui)
  return (
    <LoadingOverlay className="h-screen" active={ modalOpen } spinner={ spinners[hourNow] }>
      <AppRouter />
    </LoadingOverlay>
  );
}

export default App;
