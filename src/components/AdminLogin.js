import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    useEffect(() => {
      // Проверяем, аутентифицирован ли администратор при загрузке компонента
      checkAdminAuthentication();
    }, []);
  
    const checkAdminAuthentication = () => {
      // Проверяем наличие метки аутентификации администратора в локальном хранилище
      const authenticated = localStorage.getItem('isAdminAuthenticated');
      if (authenticated) {
        // Если аутентификация выполнена, устанавливаем соответствующее состояние
        setIsAdminAuthenticated(true);
      }
    };
  
    const handleLogout = () => {
      // Удаляем метку аутентификации администратора из локального хранилища
      localStorage.removeItem('isAdminAuthenticated');
      // Устанавливаем состояние аутентификации администратора в false
      setIsAdminAuthenticated(false);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Проверяем введенные учетные данные с данными из файла конфигурации
      if (username === 'admin' && password === '123456') {
        // Если учетные данные верны, устанавливаем состояние аутентификации администратора в true
        localStorage.setItem('isAdminAuthenticated', true);
        // Перенаправляем на страницу управления проектами
        navigate('/projecttable');
      } else {
        // Выводим сообщение об ошибке
        alert('Неверные учетные данные');
      }
    };
  
    return (
      <Container style={{padding:'100px', minHeight:'600px'}}>
        <div className="login-form">
          <h2>Вход администратора</h2>
          {/* Если аутентификация выполнена, показываем кнопку "Выйти" */}
          {isAdminAuthenticated ? (
            <Button variant="danger" onClick={handleLogout}>
              Выйти
            </Button>
          ) : (
            // Иначе, показываем форму входа
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="username">
                <Form.Label>Имя пользователя</Form.Label>
                <Form.Control type="text" placeholder="Введите имя пользователя" value={username} onChange={(e) => setUsername(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit" style={{backgroundColor:'green'}}>
                Войти
              </Button>
            </Form>
          )}
        </div>
      </Container>
    );
  };
  
  export default AdminLogin;