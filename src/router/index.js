import { createRouter, createWebHistory } from 'vue-router'
import DashLayout from '../layouts/DashLayout'
import AuthLayout from '../layouts/AuthLayout'

import IndexView from '../views/IndexView.vue'
import ProfileView from '../views/ProfileView.vue'
import AlertsView from '../views/Components/AlertsView.vue'
import CardsView from '../views/Components/CardsView.vue'
import ButtonsView from '../views/Components/ButtonsView.vue'
import FormsView from '../views/Components/FormsView.vue'

import LoginView from '../views/Auth/LoginView'
import RegisterView from '../views/Auth/RegisterView'

import Guard from '@/services/middleware';

const routes = [
	{
		path: '/auth', name: '', component: AuthLayout, beforeEnter: Guard.redirectIfAuthenticated,
		children: [
			{
				path: 'login',
				name: 'auth.login',
				component: LoginView
			},
			{
				path: 'register',
				name: 'auth.register',
				component: RegisterView
			},
		]
	},
	{
		path: '/', name: '', component: DashLayout, beforeEnter: Guard.redirectIfUnnauthenticated,
		children: [
			{
				path: '',
				name: 'panel.index',
				component: IndexView
			},
			{
				path: '/componentes/alerts',
				name: 'panel.components.alerts',
				component: AlertsView
			},
			{
				path: '/componentes/cards',
				name: 'panel.components.cards',
				component: CardsView
			},
			{
				path: '/componentes/botoes',
				name: 'panel.components.buttons',
				component: ButtonsView
			},
			{
				path: '/componentes/formularios',
				name: 'panel.components.forms',
				component: FormsView
			},
			{
				path: '/perfil',
				name: 'panel.profile',
				component: ProfileView
			},
		]
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
