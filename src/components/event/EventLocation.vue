<script>
export default {
    setup() {
        const key = import.meta.env.VITE_MAPS_EMBED_API_KEY;
        return {
            mapsUrl: `https://www.google.com/maps/embed/v1/place?key=${key}&q=Simplon.co+14+rue+de+la+beaune+93100+montrueil&zoom=15&language=fr`
        }
    }
};
</script>
<template>
    <h2>Quand et où ?</h2>
    <div class="row">
        <div class="col-12 col-lg-5">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex">
                        <i class="bi bi-calendar text-primary me-2 fs-3"></i>
                        <div class="pt-1">
                            <strong>Avril 2023</strong>
                            <ol class="list-unstyled mb-0">
                                <li class="text-nowrap"><strong>03</strong> matching</li>
                                <li class="text-nowrap"><strong>04</strong> hackathon</li>
                                <li class="text-nowrap"><strong>05</strong> démo</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <hr class="text-secondary">
                    <div class="d-flex mb-3">
                        <i class="bi bi-geo-alt-fill text-primary me-2 fs-3"></i>
                        <address class="text-nowrap pt-1">
                            <strong>Simplon.co</strong><br>
                            14 rue de la Beaune<br>
                            93100 MONTREUIL<br><br>
                            <strong>M9</strong> Croix de Chavaux
                        </address>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-7">
            <div class="ratio ratio-16x9 border rounded-2 shadow-sm">
                <iframe loading="lazy" :src="mapsUrl" title="Carte de géolocalisant Simplon.co"></iframe>
            </div>
        </div>
    </div>
</template>