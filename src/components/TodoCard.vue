<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title has-text-left">
                Dia
            </p>
            <div class="has-text-right">
                <p class="card-header-title">0 Tarefas</p>
            </div>
        </header>
        <div class="card-content">
            <div class="content"></div>
            <div class="content"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'todo-card'
}
</script>

<style>
    .card {
        border-radius: 10px;
    }
    .card-header-title {
        color: #636368
    }
</style>