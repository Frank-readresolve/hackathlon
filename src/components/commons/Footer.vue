<template>
    <footer class="bg-primary mt-4">
        <nav class="container-xxl navbar navbar-dark">
            <div class="container-fluid mt-4">
                <ul class="navbar-nav">
                    <li>
                        <RouterLink :to="{ name: 'home' }" class="nav-link" active-class="active">Accueil
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'event' }" class="nav-link" active-class="active">Événement
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'contact' }" class="nav-link" active-class="active">Contact</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'legal' }" class="nav-link" active-class="active">Mentions légales
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container-xxl">
            <hr class="text-secondary">
            <div class="d-flex justify-content-between align-items-center mt-4 pb-4">
                <div>
                    <a href="https://linkedin.com" rel="noreferrer nofollow" target="_blank"
                        class="text-secondary fs-4 me-2" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
                    <a href="https://facebook.com" rel="noreferrer nofollow" target="_blank"
                        class="text-secondary fs-4 me-2" title="Facebook"><i class="bi bi-facebook"></i></a>
                    <a href="https://pinterest.com" rel="noreferrer nofollow" target="_blank" class="text-secondary fs-4"><i
                            class="bi bi-pinterest" title="Pinterest"></i></a>
                </div>
                <div class="text-secondary fw-light">©2023 Hackathlon.</div>
            </div>
        </div>
    </footer>
</template>