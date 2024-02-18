<script>
    const links = [
        { label: 'accueil', href: '/' },
        { label: 'prestations', href: '/prestations' },
        { label: 'contact', href: '/contact' },
        { label: 'mentions légales', href: '/mentions-legales' },
        { label: 'cgv', href: '/cgv' }
    ];
</script>


    <div class="lg:hidden bg-black flex justify-center items-center">
        <nav>
            <ul class="text-center flex flex-col gap-10">
                {#each links as { label, href }}
                    <li><a {href} class="title">{label}</a></li>
                {/each}
            </ul>
        </nav>
    </div>



<style lang="postcss">
    div{
        height: 100%;
        top: 70px;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        z-index: 2;
    }

    a{
        @apply p-2;
    }
</style>