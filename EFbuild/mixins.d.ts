declare namespace EFTut_Suppl.EFMod_Algae {
    class CONST {
    }
}
declare namespace EFTut_Suppl.EFMod_Algae {
    class $Common {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $preEnterScene(): void;
        $onEnterScene(): void;
        $preExitScene(): void;
        $onExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(id: string): void;
        $timedEvents(id: string): void;
    }
}
