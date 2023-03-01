import { PlayerM } from "../models/PlayerM";
interface PlayerRender{
    player:PlayerM;
}
export const Player = ({player}:PlayerRender) => {
  return (
    <div className="card" >
  
  <div className="card-body">
    <h5 className="card-title">{player.first_name} {player.last_name}</h5>
    <p className="card-text">{player.h_meters}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}
