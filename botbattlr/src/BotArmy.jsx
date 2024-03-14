
import BotCard from "./BotCard";

function BotArmy({ troops, removeTroop }) {
  const soldiers = troops
    ? troops.map((troop) => (
        <div key={troop.id}>
          <BotCard
            img={troop.avatar_url}
            name={troop.name}
            botClass={troop.bot_class}
            health={troop.health}
            armor={troop.armor}
            damage={troop.damage}
            deleteBot={() => {removeTroop(troop.id,"army")}}
            id={troop.id}
          />
        </div>
      ))
    : "No Army";

  return (
   
   <div className="botarmy">
     <h1 style={{textAlign: "center"}} className="army_heading">Your Majesty Bot Army</h1>
      <div id="army">
        {soldiers}
      </div>
   </div>
  
  );
}

export default BotArmy;
