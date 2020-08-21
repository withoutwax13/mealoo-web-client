import React from 'react'


// SVG image assets

import MobileUltraImageAsset1 from '../../../../assets/Landing/ultra-mobile/1.svg'
import MobileImageAsset1 from '../../../../assets/Landing/mobile/1.svg'
import TabletImageAsset1 from '../../../../assets/Landing/tablet/1.svg'
import DesktopImageAsset1 from '../../../../assets/Landing/desktop/1.svg'
import DesktopHDImageAsset1 from '../../../../assets/Landing/desktophd/1.svg'

import MobileUltraImageAsset2 from '../../../../assets/Landing/ultra-mobile/2.svg'
import MobileImageAsset2 from '../../../../assets/Landing/mobile/2.svg'
import TabletImageAsset2 from '../../../../assets/Landing/tablet/2.svg'
import DesktopImageAsset2 from '../../../../assets/Landing/desktop/2.svg'
import DesktopHDImageAsset2 from '../../../../assets/Landing/desktophd/2.svg'

import MobileUltraImageAsset3 from '../../../../assets/Landing/ultra-mobile/3.svg'
import MobileImageAsset3 from '../../../../assets/Landing/mobile/3.svg'
import TabletImageAsset3 from '../../../../assets/Landing/tablet/3.svg'
import DesktopImageAsset3 from '../../../../assets/Landing/desktop/3.svg'
import DesktopHDImageAsset3 from '../../../../assets/Landing/desktophd/3.svg'

import MobileUltraImageAsset4 from '../../../../assets/Landing/ultra-mobile/4.svg'
import MobileImageAsset4 from '../../../../assets/Landing/mobile/4.svg'
import TabletImageAsset4 from '../../../../assets/Landing/tablet/4.svg'
import DesktopImageAsset4 from '../../../../assets/Landing/desktop/4.svg'
import DesktopHDImageAsset4 from '../../../../assets/Landing/desktophd/4.svg'

import MobileUltraImageAsset5 from '../../../../assets/Landing/ultra-mobile/5.svg'
import MobileImageAsset5 from '../../../../assets/Landing/mobile/5.svg'
import TabletImageAsset5 from '../../../../assets/Landing/tablet/5.svg'
import DesktopImageAsset5 from '../../../../assets/Landing/desktop/5.svg'
import DesktopHDImageAsset5 from '../../../../assets/Landing/desktophd/5.svg'

export const getImageAssets = (deviceType, time) => {
		switch(deviceType){
			case 'ultra-mobile':
				switch(time){
					case 1:
						return <MobileUltraImageAsset1/>
					case 2:
						return <MobileUltraImageAsset2/>
					case 3:
						return <MobileUltraImageAsset3/>
					case 4:
						return <MobileUltraImageAsset4/>
					case 5:
						return <MobileUltraImageAsset5/>
					default:
						break
				}
				break
			case 'mobile':
				switch(time){
					case 1:
						return <MobileImageAsset1/>
					case 2:
						return <MobileImageAsset2/>
					case 3:
						return <MobileImageAsset3/>
					case 4:
						return <MobileImageAsset4/>
					case 5:
						return <MobileImageAsset5/>
					default:
						break
				}
				break
			case 'tablet':
				switch(time){
					case 1:
						return <TabletImageAsset1/>
					case 2:
						return <TabletImageAsset2/>
					case 3:
						return <TabletImageAsset3/>
					case 4:
						return <TabletImageAsset4/>
					case 5:
						return <TabletImageAsset5/>
					default:
						break
				}
				break
			case 'desktop':
				switch(time){
					case 1:
						return <DesktopImageAsset1/>
					case 2:
						return <DesktopImageAsset2/>
					case 3:
						return <DesktopImageAsset3/>
					case 4:
						return <DesktopImageAsset4/>
					case 5:
						return <DesktopImageAsset5/>
					default:
						break
				}
				break
			case 'desktophd':
				switch(time){
					case 1:
						return <DesktopHDImageAsset1/>
					case 2:
						return <DesktopHDImageAsset2/>
					case 3:
						return <DesktopHDImageAsset3/>
					case 4:
						return <DesktopHDImageAsset4/>
					case 5:
						return <DesktopHDImageAsset5/>
					default:
						break
				}
				break;
			default:
				break
		}
	}