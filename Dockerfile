# Image de développement de GE-Televerse.
#
# Elle sert à exercer l'application en conteneur hors de l'infrastructure de
# l'État : base nginx publique, non privilégiée. Elle N'EST PAS le livrable
# déployé — l'image de production part d'une base durcie du registre interne et
# est construite par la chaîne d'intégration, dont la définition ne vit pas dans
# ce dépôt (cf. CONTRIBUTING.md).
#
# Construire :
#   yarn install && yarn build
#   docker build -t ge-televerse-front:dev .
#
# Lancer (application sur / , page de démonstration sur /demo/) :
#   docker run --rm -p 8080:8080 ge-televerse-front:dev
#
# L'API n'est pas servie par cette image. Pour un parcours complet, placez un
# backend GE-Televerse-Back derrière le même nom d'hôte sur /api, ou utilisez le
# mode mock du serveur de développement (`yarn start`).

FROM nginxinc/nginx-unprivileged:alpine

# Spécification explicite pour satisfaire l'analyse statique KICS (CWE-250)
USER 101

# Le port 8080 et l'utilisateur non privilégié (uid 101) viennent de l'image de
# base : rien à faire ici pour tourner sans root.
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Sortie de `yarn build`. Elle contient les deux entrées : l'application à la
# racine et la page de démonstration sous demo/.
COPY build/ /usr/share/nginx/html/

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --quiet --spider http://127.0.0.1:8080/ || exit 1
