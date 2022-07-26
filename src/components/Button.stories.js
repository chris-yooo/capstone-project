import Button from './Button';

export default {title: 'Button', component: Button};

export const Default = () => (
  <InputButton type="submit" id="sendMessage">
    <Icon icon="carbon:send-alt" style={{fontSize: '28px'}} />
  </InputButton>
);
