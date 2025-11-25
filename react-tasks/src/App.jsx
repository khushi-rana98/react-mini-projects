import Counter from './Counter'
import Display from './Display'
import Accordian from './Accordian';
import AccordianList from './AccordianList';
import ImageSlider from './Image';
import Checklist from './CheckList';
import DisableBtn from './Disable';
import Disable2 from './Disable2';
import HideContent from './HideContent';
import FormHandling from './Form';
import Cycle from './Cycle';
import Styling from './Styling'
import FormValidation from './FormValidation';

import { ClockProvider } from './liveClock/ClockContext';
import ClockDisplay from './liveClock/ClockDisplay';
import MessageAfter from './liveClock/MessageAfter';
import ControlPanel from './liveClock/ControlPanel';
function App(){
  return(
    <div>
      <Counter/>
      <Display></Display>
      <Accordian></Accordian>
      <AccordianList/>
      <ImageSlider/>
      <Checklist/>
      <DisableBtn/>
      <Disable2/>
      <HideContent/>
      <FormHandling/>
      <Cycle/>
      <Styling/>
      <FormValidation/>
      {/* live clock */}
    < ClockProvider autoStopAfterMs={20000}>
    <ClockDisplay/>
    <MessageAfter message={"Child A :10s message"} delayMs={10000}/>
    <MessageAfter message={"Child B: 15s message"} delayMs={15000}/>
    <ControlPanel/>
   </ClockProvider>
    </div>
  )
}
export default App;

