import React from 'react';
import { COURSES } from './data.jsx';
import { HomeA, HomeB, HomeC } from './site-home.jsx';
import { Catalog, CourseDetail, Checkout, About, Blog, Contact } from './site-pages.jsx';
import { StudentArea } from './student-area.jsx';
import { BoLogin, BoDash, BoCourses, BoCourseEdit, BoEnroll, BoPay, BoReports, BoCMS } from './backoffice.jsx';

export default function App({ initialScreen = 'home' } = {}) {
  const [screen, setScreen] = React.useState(initialScreen);
  const [courseId, setCourseId] = React.useState('c1');
  const [cart, setCart] = React.useState([]);
  const [editing, setEditing] = React.useState(null);

  const onAdd = (c) => setCart((prev) => (prev.find((x) => x.id === c.id) ? prev : [...prev, c]));
  const onNav = (s, id) => { if (id) setCourseId(id); setScreen(s); window.scrollTo(0, 0); };
  const boNav = (s) => { setScreen('bo-' + s); window.scrollTo(0, 0); };

  if (screen === 'home') return <HomeA onNav={onNav} onAdd={onAdd} />;
  if (screen === 'homeB') return <HomeB onNav={onNav} onAdd={onAdd} />;
  if (screen === 'homeC') return <HomeC onNav={onNav} onAdd={onAdd} />;
  if (screen === 'catalog') return <Catalog onNav={onNav} onAdd={onAdd} />;
  if (screen === 'course') return <CourseDetail courseId={courseId} onNav={onNav} onAdd={onAdd} />;
  if (screen === 'checkout') return <Checkout cart={cart.length ? cart : [COURSES[0]]} onNav={onNav} setCart={setCart} />;
  if (screen === 'about') return <About onNav={onNav} />;
  if (screen === 'blog') return <Blog onNav={onNav} />;
  if (screen === 'contact') return <Contact onNav={onNav} />;
  if (screen === 'student') return <StudentArea onNav={onNav} />;
  const boExit = () => onNav('home');
  if (screen === 'bo-login') return <BoLogin onLogin={() => setScreen('bo-dash')} />;
  if (screen === 'bo-dash') return <BoDash onNav={boNav} onExit={boExit} />;
  if (screen === 'bo-courses') return editing
    ? <BoCourseEdit course={editing} onNav={boNav} onClose={() => setEditing(null)} onExit={boExit} />
    : <BoCourses onNav={boNav} onEdit={setEditing} onExit={boExit} />;
  if (screen === 'bo-enroll') return <BoEnroll onNav={boNav} onExit={boExit} />;
  if (screen === 'bo-pay') return <BoPay onNav={boNav} onExit={boExit} />;
  if (screen === 'bo-reports') return <BoReports onNav={boNav} onExit={boExit} />;
  if (screen === 'bo-cms') return <BoCMS onNav={boNav} onExit={boExit} />;
  return <HomeA onNav={onNav} onAdd={onAdd} />;
}
