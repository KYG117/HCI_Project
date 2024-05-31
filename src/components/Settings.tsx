import { useParams } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"
import { useSettingContext } from "../Contexts"
import { useState } from "react"
import SettingBar from "./SettingBar"

const Settings = () => {
  const { id } = useParams();
  const { getSettingById, addSetting } = useSettingContext();

  const navigate = useNavigate();

  

  return (
    <>
      <div className="setting">
        <SettingBar />
      </div>
    </>
  )
}

export default Settings