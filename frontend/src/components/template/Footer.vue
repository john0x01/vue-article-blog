<template>
    <footer class="footer">
        <span>
            Developed by 
            <a href="https://github.com/john0x01/" style="text-decoration: none;"><strong>john0x01</strong></a> | Made during
            <a href="https://www.cod3r.com.br/"><strong>Cod3r © 2022</strong></a>
            <strong> Vue lessons</strong>
        </span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #ddd;
        color: #333;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
    }
</style>