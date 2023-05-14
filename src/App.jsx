import Fingerspose from "./components/Fingerspose";
import Header from "./components/Header";
import Main from "./components/Main";
import React, { useState, CSSProperties, useEffect } from 'react'
import { useTransition, animated, useSpringRef, SpringRef } from '@react-spring/web'
import { motion } from "framer-motion"

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Main />
    </div>
  )
}