import { useState,useEffect } from "react";
import { PlayerM } from "../models/PlayerM";
import { url } from "../utils/urls";
import { Player } from "./Player";
export const Players = () => {
  const [players, setplayers] = useState<PlayerM[]>([]);
  const [busqueda, setbusqueda] = useState("");
  useEffect(() => {
    const cargar=async()=>{
        const response=await fetch(url);
        console.log(response);
        const result=await response.json();
        const info:PlayerM[]=result.values;
        setplayers(info);
        
    }
    cargar();
  }, []);
  const filtrar=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setbusqueda(e.target.value);
    console.log(filter_players);
  }
  const filter_players=players.filter((player)=>{
    return player.first_name.toLowerCase().
    match(busqueda.toLowerCase()) || player.last_name.toLowerCase().
    match(busqueda.toLowerCase());
  });
  return (
    <>
        <input type="text" name="filtro" onChange={filtrar}
        />
        {filter_players.map((player,index)=>{
            return (
                <Player player={player} 
                key={index}/>
            )
        })}
    </>
  )
}
