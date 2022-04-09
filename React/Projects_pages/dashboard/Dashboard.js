import React from 'react';
import '../pages.css'
import { Navbar, Article, Likes} from '../../components'
import { Footer } from '../../containers';
import dashboard_img from '../../assets/Dashboard.png'


const Dashboard = () => {
  return <div className='pages__bg'>
    <Navbar color1={'#263238'}/>
    <Article 
    name={'Веб-страница с портфельным дашбордом'} 
    target={'создать веб-страницу с дашбордом на python c помощью библиотеки dash.'} 
    technologies={'python (numpy, pandas, dash, plotly) , html&css , UX&UI , финансовые технологии (чуть-чуть)'} 
    timeline={'27.01 - 13.02'}></Article>
    <div className='pages__container'>
        <h2 className='pages__container-h2'>Зачем мы это делали? (предыстория)</h2>
        <p className='pages__container-p'>Есть код на Python, который генерирует некую финансовую информацию (инвестиционные портфели) для фин-тех лаборатории в РЭУ. Необходима красивая визуализация этой информации. Были попытки сделать это на Power BI, однако он плохо (прям ооооочень плохо) интегрируется с Python-скриптом для подгрузки данных, а также непонятно, как это потом можно масштабировать в онлайн (походу никак).</p>
        <img className='pages__container-img' src={dashboard_img}></img>
        <p className='pages__container-p'>Поэтому в рамках проекта хотелось сделать тот же самый дашборд, но в качестве веб-страницы, т.к. можно запилить самим, как угодно по визуализации, это можно будет масштабировать в онлайн, а также есть специальная библиотека на python для создания веб-визуализации, что отлично подойдет для интеграции нашего python-скрипта для подгрузки данных.</p>
        <Likes></Likes>
    </div>
    
    <Footer/>
    </div>
    
};


export default Dashboard;
