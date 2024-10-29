# Jøkul Portal

Jøkul Portal er inngangsporten til dokumentasjon og egenopplæring i bruken av [Jøkul](https://github.com/fremtind/jokul), designsystemet til Fremtind.

Basert på [Payloads mal for Payload CMS + Remix](https://github.com/payloadcms/remix-server).

> This is an example repository of how to set up Payload CMS for content management together with Remix, in such a manner that each application is divided into its own package (including the express server app).
>
> The Payload instance is injected into Remix loaders and actions through request context. This way we are free to use the Payload Local API for data, user and authentication management, while avoiding payload having to be bundled together with the remix server build. With this setup you can even use the Payload Authentication middleware in your remix application.

## Kom i gang

Som utvikler for Jøkul Portal trenger du:

-   [Node LTS](https://nodejs.org/en/)
-   [MongoDB Community Server](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition) (eller [via Docker](https://www.mongodb.com/compatibility/docker)).

Prosjektet bruker `pnpm`, som du kan installere via [`corepack`](https://nodejs.org/dist/latest/docs/api/corepack.html).

Valgfritt, men kan være nyttig:

-   Tilgang til Jøkuls kontoer (`fremtind-distlosn-ds-jkl-preprod` / `fremtind-distlosn-ds-jkl-prod´) i IAM (spør leder)
-   [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) satt opp med `aws configure sso`.
-   SSO start URL: https://fremtind.awsapps.com/start
-   Region: eu-west-1
-   Konto: fremtind-distlosn-ds-jkl-preprod
-   Docker, via Self Service (spør leder om lisens for Docker Desktop) for å bygge og teste containers lokalt.

Med verktøyene installert kloner du dette repoet på vanlig måte.

```
git clone https://github.com/fremtind/jkl-portal.git
cd jkl-portal
```

## Setup

Start MongoDB om den ikke kjører.

-   Lag en `.env`-fil i `apps/server/` basert på `.env.example`.
-   Kjør `pnpm install`.
-   Kjør `pnpm dev`.

Om alt går som det skal vil devserveren være tilgjengelig på [localhost:3000](http://localhost:3000).

## Generering av typer

Ved endring på schema i Payload, og ved oppdatering av Jøkul-pakker, må du kjøre `pnpm -r generate:types` på rotnivå, for å generere nye typer. Commit endringene som genereres.

## Monorepo

> This monorepo is using `pnpm` for package management. While it is an easy task to switch to `yarn` instead, setting this up with `npm` workspaces can be trickier.

### Apps og packages

Fra malen:

-   `/apps/cms`: a [Payload CMS](https://payloadcms.com/) application, which will act as our backend and admin interface
-   `/apps/web`: a [Remix](https://remix.run/) application, which will act as our frontend
-   `/apps/server`: a [ExpressJS](https://expressjs.com/) application that ties all our middleware, static file serving and routing needs together
-   `/packages/ui`: a stub React component library shared by both `web` and `cms` applications
-   `/packages/shared`: a package that all out apps use that contains shared dependencies, in order to reduce bundle sizes
-   `/packages/eslint-config`: `eslint` configurations
-   `/packages/stylelint-config`: `stylelint` configurations

### Utilities

Fra malen:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting
-   [Turborepo](https://turborepo.org/) for running monorepo builds and script in a DX friendly and parallel manner
-   [Nodemon](https://www.npmjs.com/package/nodemon) for running the express server while listening to file changes in the Payload CMS package

### Develop

> To develop all apps and packages, run `pnpm run dev` from the root of the monorepo. This will start the express server that serves both the Remix and PayloadCMS applications.
>
> When saving file changes in the `apps/cms` package, the running express server will restart in order for the Payload CMS configuration changes to take effect.
>
> Remix is reloaded without restarting the express server by purging the node `require()` cache of previously imported Remix files.

### Usage

CMS Admin UI finnes under [localhost:3000/admin](http://localhost:3000/admin).

Brukernavn og passord er _dev@payloadcms.com_ / _qwerty_

### Build

> To build all apps and packages, run `pnpm run build` from the root of the monorepo. Turborepo will take care of running the build scripts in order so that packages depending on other monorepo packages is built last.
>
> If you want, serve your production build with `pnpm run serve` from the root of the monorepo.

Containers bygges og deployes automatisk av GitHub Actions ved merge til `main`.

## Produksjon

### Infrastruktur

Jøkul-portalens infrastruktur består kort fortalt av:

-   [AWS Elastic Container Registry](https://aws.amazon.com/ecr/) for lagring av ferdig byggede Docker containers.
-   [AWS Elastic Container Service](https://aws.amazon.com/ecs/) for å kjøre Docker containere.
-   [AWS Elastic Load Balancer](https://aws.amazon.com/elasticloadbalancing/) som inngangsport fra internet til kjørende Docker containers.
-   [AWS Route 53](https://aws.amazon.com/route53/) som DNS for besøkende fra internet.
-   [AWS DocumentDB](https://aws.amazon.com/documentdb/) som database for CMSet.
-   [AWS Elastic File System](https://aws.amazon.com/efs/) til lagring av bilder og filer fra CMSet.
-   [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html) for miljøvariabler.

Om AWS i Fremtind er nytt for deg er det nok lurt å starte med å lese deg opp på [Cloud Core-teamets dokumentasjon](https://confluence.intern.sparebank1.no/display/CCT/Cloud+Core+Team).

Infrastrukturen blir i skrivende stund satt opp og konfigurert manuelt.

#### Rekkefølge for oppsett i AWS

Noterer ned en teoretisk "optimal" rekkefølge for å sette opp ting. Oppsett har vært veldig utforskende, så README kan være noe ustrukturert med tanke på denne rekkefølgen.

1. Docker repo. ECR.
1. ECS cluster.
1. Database.
1. Load balancers. ALB i EC2.
1. DNS. Domener i Route 53.
1. Sertifikater. AWS Certificate Manager, med domener laget i Route 53.
1. HTTPS listeners i ALB.
1. Miljøvariabler og secrets.
1. ECS Task Definition, Services.
1. EFS.

Bruk disse tagsene for det som lages:

-   Name: noe passende
-   App: `jkl-portal-prm`
-   Team: `jokul`

##### ECR

[Dokumentasjonen til AWS ECR finner du her](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html).

Publisering av nye containere til ECR-repoet `jkl-portal-prm` skjer automatisk ved merge til `main`.

<details>
    <summary>Oppsett av automatisk deploy</summary>

For å gjøre det litt enklere å rulle ut nye versjoner i testmiljøet er det satt opp automatisk deploy av nye images. Dette baserer seg på:

-   EventBrigde
-   Lambda
-   Execution Role

**Lambda**

-   Gå til Lambda dashboard.
-   Lag en ny function.
-   Function name: `jkl-portal-prm-autodeploy`.
-   Runtime: Python 3.9.
-   Architecture: arm64.

Lag funksjonen, lim inn Python-koden under i lambda_function, og trykk Deploy.

```python
import os
import json
import boto3

region = "eu-west-1"
cluster = "jkl-portal-cluster"
service = "jkl-portal-prm-service"
main_image_tag = "latest"

ecs = boto3.client('ecs', region_name=region)
def lambda_handler(event, context):
    print(json.dumps(event))
    detail = event['detail']
    image_tag = detail['image-tag']
    if image_tag != main_image_tag:
        print('Exiting because image tag is not', main_image_tag)
        return
    print('Updating service', service)
    update_result = ecs.update_service(cluster=cluster, service=service, forceNewDeployment=True)
    if update_result['service']['status'] != 'ACTIVE':
        print('Update service failed with status', update_result['service']['status'])
        return
    print('Done updating service', service)
```

**Execution Role**

For at Lambda-funksjonene vi opprettet skal ha lov til å gjøre kallet mot ECS må vi oppdatere rollene deres i IAM.

-   Gå til IAM dashboard.
-   Gå til Policies og velg Create policy.
-   Velg JSON-fanen og lim inn dette:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "ecs:UpdateService",
            "Resource": "arn:aws:ecs:eu-west-1:197434302239:service/*/*"
        }
    ]
}
```

-   Gå videre til du skal oppgi et navn, og fyll inn `jkl-portal-deploy-ecs`. Create policy.

Tilbake på dashboardet, velg seksjonen Roles.

-   Søk opp `jkl-portal`.
-   Gå inn på autodeploy-rollen som ble laget automatisk da du opprettet lambdaen.
-   Velg Add permissions, så Attach policies.
-   Velg policien vi nettop laget, `jkl-portal-deploy-ecs`.
-   Trykk Attach policies.

**EventBridge**

-   Gå til EventBridge dashboard.
-   Lag en ny regel.
-   Name: `jkl-portal-prm-autodeploy`.
-   Event bus: default.
-   Enable rule.
-   Rule with an event pattern.
-   AWS events or EventBridge partner events.
-   Hopp over Sample Events.
-   Lim inn JSON under i Custom patterns.

```json
{
    "source": ["aws.ecr"],
    "detail-type": ["ECR Image Action"],
    "detail": {
        "action-type": ["PUSH"],
        "result": ["SUCCESS"],
        "repository-name": ["jkl-portal-prm"],
        "image-tag": ["latest"]
    }
}
```

-   Velg target AWS service.
-   Select a target: Lambda function.
-   Velg Lambda-funksjonen du laget tidligere.

Nå skal pushing av Docker-images trigge events, som trigger Lambda-funksjoner, som kjører automatisk deploy.

Merk at dette ikke vil gjøre endringer i _task definition_, så hvis du for eksempel har nye miljøvariabler så vil deployen feile fram til task definition er opppdatert.

</details>

<details>
    <summary>Manuell bygg og deploy</summary>

På utviklermaskin (se [Kom i gang](https://github.com/fremtind/jkl-portal#kom-i-gang) for installering og konfigurasjon av Docker og AWS CLI):

-   `pnpm docker:build`
-   Hvis ikke innlogget:
    -   `aws sso login --profile jkl-preprod-developer-197434302239`
    -   `aws ecr get-login-password --region eu-west-1 --profile jkl-preprod-developer-197434302239 | docker login --username AWS --password-stdin 197434302239.dkr.ecr.eu-west-1.amazonaws.com`
-   `pnpm docker:tag`
-   `pnpm docker:push`

Manuell deploy:

-   Gå til ECS-dashboardet.
-   Gjør eventuelle endringer i Task definition.
-   Klikk deg inn på `jkl-portal-prm`-clusteret.
-   Gå inn på den enkelte Service og trykk Update.
-   Kontroller task definition-versjonen.
-   Huk av for _Force new deployment_.
-   Fullfør veiviseren uten andre endringer.

</details>

##### ECS

Kjøring av containers gjøres på [AWS ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html).

Portalen består av et cluster laget med Networking only-templaten til AWS, for å bruke Fargate.

På Configure cluster-steget:

-   Cluster name: `jkl-portal-cluster`
-   Networking:
    -   Create VPC for this cluster
    -   Behold defaultvalg

Lag clusteret, og bekreft at subnet som blir laget har skrudd _av_ automatisk public IP. Det kan du gjøre ved å klikke deg inn på dem i VPC-konsollen. _Auto-assign public IPv4 address_ skal være satt til _No_.

**VPC endpoints**

For at tjenestene våre senere skal kunne snakke med blant annet AWS System Manager for miljøvariabler er vi nødt til å lage et VPC endpoint. Dette er en slags vei _ut_ fra innsiden av et privat nettverk, som vi nettop har fått generert. ([Bloggpost om VPC endpoints](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-systems-manager-vpc-endpoints/))

Søk opp VPC og finn Endpoints i sidemenyen.

Lag en ny endpoint:

-   Service category: AWS services.
-   Services: søk opp `ssm` og finn `com.amazonaws.eu-west-1.ssm`.
    -   Her må du sørge for å velge `com.amazonaws.eu-west-1.ssm` i listen under. Det er en radio button der.
-   Velg VPCen til clusteret.
-   Velg to availability zones og subnetet deres.
-   Security Group:
    -   Opprett en ny første gangen. Tillat HTTPS-trafikk fra `10.0.0.0/16`. Gjenbruk for nye endpoints.

Gjenta prosessen for disse tjenestene:

-   `com.amazonaws.eu-west-1.ssm`
-   `com.amazonaws.eu-west-1.ecr.api` (Docker-repoet).
-   `com.amazonaws.eu-west-1.ecr.dkr` (Docker-repoet).
-   `com.amazonaws.eu-west-1.logs`
-   `com.amazonaws.eu-west-1.s3` (Gateway, velg route table for clusteret. Fikser [cannotpullcontainererror](https://aws.amazon.com/premiumsupport/knowledge-center/ecs-fargate-pull-container-error/))

##### DocumentDB

Sett opp en ny Amazon DocumentDB Instance Based Cluster.

-   Name: `jkl-portal-ddb`
-   Engine: 4.0.0
-   Instance class: `db.t3.medium` (eller hva enn som er billigst)
-   Number of instances: 1
-   Master username: `jokul`
-   Master password: generer et sterkt passord og lagre det et trygt sted inntil videre.

Om du får valget om å lage en ny security group, gjør dette og gi den et gjenkjennelig navn. Denne security groupen må etter hvert tillate trafikk fra security groupen til servicen på ECS.

Du vil få et eksempel på en connection string og en kommando for å laste ned en PEM-fil. PEM-fila lastes ned ved bygg av Docker-image, så den trenger du ikke tenke på.

Eksempel på connection string: `mongodb://jokul:<ditt passord>@jkl-portal-ddb.cluster-cabosnhft73t.eu-west-1.docdb.amazonaws.com:27017`

Kopier denne stringen og ta vare på den et lurt sted inntil videre.

##### Miljøvariabler og secrets

Settes i [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html).

| Miljøvariabel         | Parameternavn                    | Beskrivelse                                        |
| --------------------- | -------------------------------- | -------------------------------------------------- |
| `MIXPANEL_PROJECT_ID` | `/jkl-portal/frontend/mixpanel`  | Kan lagres som plaintext.                          |
| `PAYLOADCMS_SECRET`   | `/jkl-portal/prm/session-secret` | Minst 32 tegn lang passordstring som SecretString. |
| `MONGODB_URL`         | `/jkl-portal/prm/mongodb-url`    | Secret. Inneholder master password fra DocumentDB. |

##### ALB

Load balancers opprettes under EC2-fanen, som Application Load Balancer (ALB). For at ALB skal fungere må det opprettes en target group.

**Target groups**

-   Target type: IP addresses.
-   Target group name: `jkl-portal-tg-prm`.
-   Protocol: HTTP.
-   Port: 3000.
-   VPC: den som ble laget av clusteret.
-   Healthcheck:
    -   Path: `/_healthcheck`.
    -   Port: 3000
    -   Timeout: 25
    -   Healthy threshold: 2 (samme som unhealthy).
    -   Success codes: 200-399.

Neste steg _Register targets_ er valgfritt, og vi hopper over manuell registrering her. Clusteret vil selv sørge for å registrere targets senere.

**ALB**

-   Internet facing.
-   IPv4.
-   VPC satt til ECS sin VPC.
-   Mappings i eu-west-1a og 1b.
-   Subnet satt til det automatisk genererte fra ECS.
-   Security Groups satt til den vi laget for ALB tidligere.

##### Route 53

For å få HTTPS og en fornuftig URL er vi nødt til å sette opp et subdomenee i Route 53.

Gå til Route 53 og velg _Hosted Zones_. Du skal se to soner:

-   Én prefixet med et tall, konto-IDen.
-   En annen prefixet med det mer lesbare navnet på kontoen.

Gå inn på sistnevnte. Trykk Create Record oppe til høyre.

-   `portalen` som subdomene.
-   Velg A-record.
-   Velg Alias to Application and Classic Load Balancer.
-   Velg eu-west-1.
-   Velg ALB fra listen.

Trykk så _Create records_.

**HTTPS**

Nå som vi har en DNS record kan vi ordne sertifikat.

For å få sertifikat må vi gå til Certificate Manager og trykke Request.

-   Velg Public.
-   Lim inn domenenavnet, for eksempel `portalen.distlosn-ds-jkl-preprod.aws.fremtind.no`.
-   La stå på DNS validation.

Trykk på _Request_ og knappen for å se på sertifikatet.

Siden vi har opprettet en record for domenet i Route 53 skal det dukke opp en knapp på detaljsiden for sertifikatet om å opprette en CNAME-record i Route 53. Trykk på den. Etter under et minutts tid skal du ha fått et godkjent HTTPS-sertifikat for domenet.

**HTTPS listener i ALB**

Nå som vi har sertifikat må vi konfigurere load balanceren til å bruke det.

-   Gå tilbake til load balancer-seksjonen i EC2 og finn fram til Listeners-fanen for ALB.
-   Legg til en lytter for HTTPS, port 443.
-   Action: forward til target group.
-   Default SSL/TLS certificate: From ACM, og domenet som skal gå til ALB.
-   Endre også default-lytteren på port 80 til å redirecte til HTTPS, port 443.

##### ECS Task Definitions

Clusteret må ha en task definition. Task definitions kan sammenlignes med seksjonene i docker-compose. De konfigurerer opp nettverk, miljøvariabler og volumer – i tillegg til AWS-spesifike ting som ressursbruk på Fargate.

For å sette opp en task definition, gå til ECS-dashboardet og velg Task Definitions, og Create new task definition:

-   Task family name: `jkl-portal-prm`
-   Task role: `ecsTaskExecutionRole` (lag denne først om du ikke har den i listen, se Task role under.
-   Network mode: `awsvpc`.
-   Fargate launch type compatibility.
-   Operating system family: Linux.
-   Task size: 1GB memory, 0.5vCPU.

Legg til containeren med dette mønsteret for konfigurasjon:

-   Name: `jkl-portal-prm-container`.
-   Image: sjekk ECR for dette, for eksempel `197434302239.dkr.ecr.eu-west-1.amazonaws.com/jkl-portal-prm:latest`.
-   Memory limits: hard, 400.
-   Port mappings: 3000, tcp.
-   Environment:
    -   Se Miljøvariabler i task definitions under.
-   Healthcheck:
    -   Command: `CMD-SHELL, curl -f http://localhost:3000/ || exit 1`.
    -   Interval: 30.
    -   Timeout: 5.
    -   Start period: 120.
    -   Retries: 3.

**Task Role**

Blant annet for at vi skal kunne lese miljøvariabler og secrets må vi sette opp en egen IAM role ved navn `ecsTaskExecutionRole`.

[Se AWS-dokumentasjonen for hvordan sette opp denne rollen](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html#create-task-execution-role).

I tillegg må vi ha [disse IAM permissions](https://docs.aws.amazon.com/AmazonECS/latest/userguide/specifying-sensitive-data-secrets.html#secrets-iam-parameters) som en inline policy på `ecsTaskExecutionRole`for å lese parametere.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": ["ssm:GetParameters", "secretsmanager:GetSecretValue", "kms:Decrypt"],
            "Resource": [
                "arn:aws:ssm:eu-west-1:<kontoid>:parameter/*jkl-portal*",
                "arn:aws:secretsmanager:eu-west-1:<kontoid>:secret:*jkl-portal*"
            ]
        }
    ]
}
```

**Miljøvariabler i task definitions**

Miljøvariabler defineres enten i [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) (for passord og API-nøkler) eller i [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html) (for øvrige miljøvariabler).

Se `docker-compose.yml` eller [Miljøvariabler](#miljøvariabler) for en oversikt over hvilke miljøvariabler som må settes. Andre deler av denne READMEen beskriver innholdet i de ulike variablene.

Definer dem som `ValueFrom`, og bruk for eksempel `arn:aws:ssm:eu-west-1:197434302239:parameter/jkl-portal/prm/mongodb-url` osv som verdi.

**NB!** Om du får en feilmelding om `executionRoleArn`, trykk på _Configure as JSON_ og erstatt `"executionRoleArn": null,` med `"executionRoleArn": "arn:aws:iam::<kontoid>:role/ecsTaskExecutionRole",`.

##### ECS Service

Hver task definition kjøres som en service inne i jkl-portal-clusteret.

Konfigurasjon:

-   Launch type: FARGATE.
-   Service name: `jkl-portal-prm-service`.
-   Number of tasks: 1.

Ellers defaultvalg fram til neste steg: Configure network.

**VPC and security groups**

-   Velg VPCen og begge subnettene som ble laget av cluster-veiviseren.
-   Rediger security groups:
    -   Create new security group.
    -   Gi et mer lesbart navn, f. eks. `jkl-portal-prm-sg`
-   **DISABLE** auto-assign public IP.

**Health check grace period**

-   Sett til 120.

**Load balancing**

Her velger vi:

-   Application Load Balancer.
-   Load balancer name: ALBen vi laget for tjenesten.
-   Add to load balancer: Container to load balance blir jkl-portal-prm.

Velg:

-   Target group satt til tjenestens target group fra da vi satte opp ALBen.
-   Resten av valgene bør bli autopopulert basert på target group og ALBen.

##### EFS

Vi bruker EFS for å lagre filer og bilder fra CMSet. For mer om EFS og hvorfor vi bruker det i stedet for S3, se [issue #13](https://github.com/fremtind/jkl-portal/issues/13#issuecomment-1275682023).

Vi starter med å opprette et EFS-volume.

-   Gå til EFS-dashboardet.
-   Trykk Create file system.

    -   Name: `jkl-portal-prm-assets`.
    -   VPC: VPCen laget av clusteret (`jkl-portal-cluster`).
    -   Storage class: Standard.
    -   Trykk Create.

-   Gå inn på det nyopprettede filsystemet.
-   Gå til fanen File system policy og trykk Edit.
-   Huk av for Enforce in-transit encryption for all clients og lagre.

Nå må vi sette opp en security group for EFS, før vi åpner for tilgang via en mount target og access point.

-   Gå til VPC-dashboardet, og seksjonen for Security groups.
-   Trykk Create security group.
-   Name: `jkl-portal-efs-sg`.
-   Kontroller at VPCen er riktig.
-   Legg til en ny inbound rule:
    -   Type: NFS
    -   Source: Security Group for CMSet.

Tilbake i EFS-dashboardet:

Gå til Network access-fanen for å se Mount targets.

-   Du skal se to innslag i listen. Trykk Manage.
-   Endre Security Group fra default til den vi nettop laget dedikert for EFS.

Gå til Access points-fanen og trykk Create access point.

-   Root directory path: `/cms`.
-   POSIX user ID: `1000`.
-   POSIX group ID: `1000`.
-   Root directory creation user ID: `1000`.
-   Root directory creation group ID: `1000`.
-   Root directory creation POSIX permissions: `0755`.

Nå er volumet klart, men vi må fremdeles ta det i bruk fra containeren til CMSet.

Først må vi gå til IAM-dashboardet.

-   Legg til en ny policy under Policies.
-   Velg JSON-fanen og lim inn dette, men ersatt konto-ID, samt fs-nummer og fsap-nummer med verdier fra EFS-volumet som ble laget.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": ["elasticfilesystem:ClientMount", "elasticfilesystem:ClientWrite"],
            "Resource": "arn:aws:elasticfilesystem:eu-west-1:197434302239:file-system/fs-0355164ea94ad4914",
            "Condition": {
                "StringEquals": {
                    "elasticfilesystem:AccessPointArn": "arn:aws:elasticfilesystem:eu-west-1:197434302239:access-point/fsap-00b61436f2a36d81f"
                }
            }
        }
    ]
}
```

-   Gi policyen navnet `jkl-portal-cms-efs-access`.
-   Under Roles, søk opp `ecsTaskExecutionRole`.
-   Rediger rollen og legg til den nyopprettede `jkl-portal-cms-efs-access` policyen.

Gå videre til ECS-dashboardet og naviger til Task definitions.

-   Lag en ny revision av `jkl-portal-prm` sin task.
-   Scroll ned til Volumes og trykk Add volume.
    -   Name: `jkl-portal-cms-efs`.
    -   Volume type: `EFS`.
    -   File system ID: `jkl-portal-cms-assets`.
    -   Access point ID: `fsap-xxxxxxxxxxxx` som ble laget tidligere.
    -   Huk av for både Encryption in transit og EFS IAM authorization.
-   Rediger containeren og scroll ned til Storage and logging.
-   Under Mount points:
    -   Source volume: `jkl-portal-cms-efs`, det vi nettop laget på "hovesiden".
    -   Container path: `/app/apps/cms/dist/media` (matcher volume i `docker-compose.yml`).

Oppdater servicen med den nye task definition.

**Feilsøking av EFS**

Hvis tasken stopper med en feilmelding om at connection er reset, kontroller Security groups. Sørg for at NFS er lagt til i inbound rules i group for EFS. Hvis det fremdeles feiler, åpne for den samme inbound rule i security group for CMSet.
