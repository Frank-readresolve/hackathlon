<template>
    <header class="bg-primary sticky-top shadow mb-4">
        <nav class="container-xxl navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <RouterLink :to="{ name: 'home' }" class="navbar-brand">Hackathlon</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-main">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar-main">
                    <ul class="navbar-nav me-auto">
                        <li>
                            <RouterLink :to="{ name: 'event' }" class="nav-link" active-class="active">Événement
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'contact' }" class="nav-link" active-class="active">Contact
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
