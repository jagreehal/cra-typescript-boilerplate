(global as any).requestAnimationFrame = (cb: any) => {
    setTimeout(cb, 0);
  };
  
  import * as Enzyme from 'enzyme';
  import * as ADAPTER  from 'enzyme-adapter-react-16';
  Enzyme.configure({ adapter: new ADAPTER() });
  
  export const mount = Enzyme.mount;
  export const shallow = Enzyme.shallow;
  