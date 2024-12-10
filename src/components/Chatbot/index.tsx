'use client'

// libraries
import { useState, useRef } from 'react'

// svg
import { Chat, Close } from '@/assets/svg/ux'

// css
import styles from './index.module.scss'

export default function Chatbot() {

    const iframeRef = useRef<HTMLIFrameElement>(null)

    const [chatBox, setChatBox] = useState(false)

    return (
        <div className={styles.chatbot}>

            {chatBox ? (
                <div className={styles.inner}>

                    <button
                        className={styles.close}
                        onClick={() => setChatBox(false)}
                    >
                        
                        <span>
                            Close
                        </span>

                        <Close />
                    </button>

                    <iframe
                        src='https://cdn.insighto.ai/bot-iframe.html?widgetId=01903381-ed15-7d3d-8ccb-020b92d9bf54'
                        allow='microphone'
                        ref={iframeRef}
                    ></iframe>

                </div>
            ) : (
                <button
                    className={styles.chatIcon}
                    onClick={() => setChatBox(true)}
                >
                    <Chat />
                </button>
            )}

        </div>
    )
}