<script setup>
	const { signOut } = useAuth()

	const { data: services } = useFetch('/api/services')

	function formatDate(date) {
		return new Date(date).toLocaleString('pt-BR', {
			dateStyle: 'short',
			timeStyle: 'short',
		})
	}
</script>

<template>
	<button @click="signOut()">Sair</button>
	<ul>
		<li v-for="service in services" :key="service.id">
			<p>{{ service.description }}</p>
			<time>{{ formatDate(service.datetime) }}</time>
			<p>{{ service.status }}</p>
		</li>
	</ul>
</template>