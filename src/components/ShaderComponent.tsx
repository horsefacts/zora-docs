import React from 'react';
import './styles.css';
import { ethers } from 'ethers';
import { ShaderFragment } from './ShaderFragment';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export const ShaderComponent = () => {
  if (ExecutionEnvironment.canUseDOM) {
    let GlslCanvas = require('glslCanvas').default;
    const canvasRef = React.useRef(null);
    React.useEffect(() => {
      const canvas = canvasRef;
      var sandbox = new GlslCanvas(canvas.current);
      // const rpcProvider = new ethers.providers.JsonRpcProvider(
      //   process.env.NEXT_PUBLIC_INFURA,
      // )
      // rpcProvider.getBlockNumber().then((num) => {
      //   sandbox.load(ShaderFragment)
      //   sandbox.setUniform('u_seed', Math.pow(num, 0.5))
      // })
      sandbox.load(ShaderFragment);
      sandbox.setUniform('u_seed', Math.pow(1, 0.5));

      canvas.current.style.width = '100%';
      canvas.current.style.height = '100%';
    }, []);
    return <canvas className='shader-canvas' ref={canvasRef} />;
  } else {
    return <></>;
  }
};
