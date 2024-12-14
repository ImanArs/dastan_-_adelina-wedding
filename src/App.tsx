import { DressCode } from "./DressCode";
import { Location } from "./Location";
import { Photo } from "./Photo";
import { Rsvp } from "./Rsvp";
import { Timer } from "./Timer";
import { WeddingDay } from "./WeddingDay";

function App() {
  return (
    <main className="max-w-[525px] w-full overflow-hidden m-auto flex flex-col">
      <Photo />
      <Timer />
      <WeddingDay />
      <Rsvp />
      <img className="h-[50px] object-cover" src="https://i.pinimg.com/736x/5e/46/c5/5e46c50a109563598acf9fb3e7b6d159.jpg" alt="" />
      <Location />
      <img className="h-[50px] object-cover" src="https://i.pinimg.com/736x/70/3e/69/703e69fff1436ea82f18c369696a80a3.jpg" alt="" />
      <DressCode />
    </main>
  );
}

export default App;
