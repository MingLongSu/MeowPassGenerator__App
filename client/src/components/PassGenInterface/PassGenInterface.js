import React, { useRef, useState } from 'react'

import './passgeninterface.css'

export default function PassGenInterface() {
    const clipBoardRef = useRef(); 

    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isLowerCase, setIsLowerCase] = useState(false);
    const [isNumbers, setIsNumbers] = useState(false);
    const [isSymbols, setIsSymbols] = useState(false);
    const [length, setLength] = useState(0); 

    const copyToClipboard = () => { 
        const randomPassword = clipBoardRef.current.value;
        navigator.clipboard.writeText(randomPassword);
    }

    const toggleUpperCase = () => { 
        setIsUpperCase(prevState => !prevState);
    }

    const toggleLowerCase = () => { 
        setIsLowerCase(prevState => !prevState);
    }

    const toggleSymbols = () => { 
        setIsSymbols(prevState => !prevState);
    }

    const toggleNumbers = () => { 
        setIsNumbers(prevState => !prevState);
    }

    const toggleLength = (e) => { 
        const newLength = !isNaN(e.target.value) ? e.target.value : 0;
        setLength(newLength);
    }

    return (
        <div className='PassGenInterface'>
            <div className='PassGenInterface__pass-gen-interface-title-container'>
                <span className='pass-gen-interface-title-container__title'>
                    Random Password Generator
                </span>
            </div>
            <div className='PassGenInterface__pass-gen-interface-body'>
                <div className='pass-gen-interface-body__row-1-body'>
                    <div className='row-1-body__body-1-title-container'>
                        <div className='body-1-title-container__title'>
                            Your new password:
                        </div>
                    </div>
                    <div className='row-1-body__body-1-output-content-container'>
                        <input ref={ clipBoardRef } className='body-1-output-content-container__password-output' type={ 'text' }></input>
                        <button onClick={ copyToClipboard } className='body-1-output-content-container__copy-to-clipboard'>
                            <i className="fas fa-copy"></i>
                        </button>
                    </div>
                </div>
                <div className='pass-gen-interface-body__row-2-body'>
                    <div className='row-2-body__generate-password-prompt-container'>
                        <div className='generate-password-prompt-container__prompt'>
                            <i className="fas fa-check"></i>
                        </div>
                    </div>
                    <div className='row-2-body__generate-password-options-container'>
                        <div className='generate-password-options-container__option-container' id='uppercase-letters'>
                            <div className='option-container__option-title-container'>
                                <span className='option-title-container__title'>
                                    Uppercase letters:
                                </span>
                            </div>
                            <div className='option-container__option-input-container'>
                                <button onClick={ toggleUpperCase } className={ 'option-input-container__toggle' + (isUpperCase ? '_active' : '') }>
                                    <div className={ 'toggle__slider' + (isUpperCase ? '_active' : '') }></div>
                                </button>
                            </div>
                        </div>
                        <div className='generate-password-options-container__option-container' id='lowercase-letters'>
                            <div className='option-container__option-title-container'>
                                <span className='option-title-container__title'>
                                    Lowercase letters:
                                </span>
                            </div>
                            <div className='option-container__option-input-container'>
                                <button onClick={ toggleLowerCase } className={ 'option-input-container__toggle' + (isLowerCase ? '_active' : '') }>
                                    <div className={ 'toggle__slider' + (isLowerCase ? '_active' : '') }></div>
                                </button>
                            </div>
                        </div>
                        <div className='generate-password-options-container__option-container' id='numbers'>
                            <div className='option-container__option-title-container'>
                                <span className='option-title-container__title'>
                                    Numbers:
                                </span>
                            </div>
                            <div className='option-container__option-input-container'>
                                <button onClick={ toggleNumbers } className={ 'option-input-container__toggle' + (isNumbers ? '_active' : '') }>
                                    <div className={ 'toggle__slider' + (isNumbers ? '_active' : '') }></div>
                                </button>
                            </div>
                        </div>
                        <div className='generate-password-options-container__option-container' id='symbols'>
                            <div className='option-container__option-title-container'>
                                <span className='option-title-container__title'>
                                    Symbols:
                                </span>
                            </div>
                            <div className='option-container__option-input-container'>
                                <button onClick={ toggleSymbols } className={ 'option-input-container__toggle' + (isSymbols ? '_active' : '') }>
                                    <div className={ 'toggle__slider' + (isSymbols ? '_active' : '') }></div>
                                </button>
                            </div>
                        </div>
                        <div className='generate-password-options-container__option-container'>
                            <div className='option-container__option-title-container'>
                                <span className='option-title-container__title'>
                                    Length:
                                </span>
                            </div>
                            <div className='option-container__option-input-container'>
                                <input onChange={ toggleLength } type={ 'text' } className='option-input-container__toggle' id='length'></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
