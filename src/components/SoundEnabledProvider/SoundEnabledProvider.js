'use client'
import React from 'react';

export const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
	const [soundEnabled, setSoundEnabled] = React.useState(false);

	return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
	);


}

export default SoundEnabledProvider;
